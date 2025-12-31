// Handle hash links on the philosophy page
// This script ensures smooth scrolling to sections when clicking hash links

(function() {
  'use strict';

  // Configuration
  var HEADER_OFFSET = 70; // Offset for fixed header when scrolling
  var HASH_LOAD_DELAY = 50; // Small delay to ensure DOM rendering is complete

  // Initialize the philosophy page functionality
  function init() {
    // Utility function to scroll to a target element
    function scrollToElement(element) {
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Function to scroll to a section by ID
    function scrollToSection(targetId) {
      var target = document.getElementById(targetId);
      if (target) {
        scrollToElement(target);
      }
    }

    // Handle hash in URL on page load
    function handleHashOnLoad() {
      if (window.location.hash) {
        var hash = window.location.hash.substring(1); // Remove the #
        // Small delay to ensure DOM is ready
        setTimeout(function() {
          scrollToSection(hash);
        }, HASH_LOAD_DELAY);
      }
    }

    // Handle clicks on hash links
    function handleHashLinks() {
      // Find all links with hash targets
      var links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(function(link) {
        link.addEventListener('click', function(e) {
          var href = link.getAttribute('href');
          if (href === '#' || href === '#top') return; // Skip empty hash links and #top
          
          var targetId = href.substring(1); // Remove the #
          var target = document.getElementById(targetId);
          
          if (target) {
            e.preventDefault();
            
            // Update the URL hash
            if (history.pushState) {
              history.pushState(null, null, href);
            } else {
              window.location.hash = href;
            }
            
            scrollToSection(targetId);
          }
        });
      });
    }

    // Initialize handlers
    handleHashLinks();
    handleHashOnLoad();

    // Also handle when navigating with browser back/forward
    window.addEventListener('hashchange', function() {
      if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        scrollToSection(hash);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded, initialize immediately
    init();
  }
})();
