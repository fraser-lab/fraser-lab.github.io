// Handle hash links in the philosophy accordion
// This script ensures that clicking hash links in the Overview section
// will both expand the target section and scroll to it smoothly

(function() {
  'use strict';

  // Configuration
  var HEADER_OFFSET = 70; // Offset for fixed header when scrolling

  // Utility function to scroll to a target element
  function scrollToElement(element) {
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // Function to expand and scroll to a section
  function expandAndScrollTo(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    // Check if the target is a collapse element
    var $target = $(target);
    
    // If the section is not already shown, expand it
    if (!$target.hasClass('show')) {
      // Wait for the collapse animation to complete before scrolling
      $target.one('shown.bs.collapse', function() {
        scrollToElement(target);
      });
      $target.collapse('show');
    } else {
      // If already shown, just scroll immediately
      scrollToElement(target);
    }
  }

  // Handle hash in URL on page load
  function handleHashOnLoad() {
    if (window.location.hash) {
      var hash = window.location.hash.substring(1); // Remove the #
      // Small delay to ensure DOM is ready
      setTimeout(function() {
        expandAndScrollTo(hash);
      }, 100);
    }
  }

  // Handle clicks on hash links
  function handleHashLinks() {
    // Find all links with hash targets (excluding the card headers which are buttons)
    $('a[href^="#"]').not('[data-toggle="collapse"]').on('click', function(e) {
      var href = $(this).attr('href');
      if (href === '#' || href === '#top') return; // Skip empty hash links and #top
      
      var targetId = href.substring(1); // Remove the #
      var target = document.getElementById(targetId);
      
      // Only handle if target is a collapse element
      if (target && $(target).hasClass('collapse')) {
        e.preventDefault();
        
        // Update the URL hash
        if (history.pushState) {
          history.pushState(null, null, href);
        } else {
          window.location.hash = href;
        }
        
        expandAndScrollTo(targetId);
      }
    });
    
    // Also handle links that have data-toggle="collapse" but also need scrolling
    $('a[href^="#"][data-toggle="collapse"]').on('click', function(e) {
      var href = $(this).attr('href');
      var targetId = href.substring(1);
      
      // Update URL hash
      if (history.pushState) {
        history.pushState(null, null, href);
      }
      
      // Wait for Bootstrap to expand, then scroll
      var target = document.getElementById(targetId);
      if (target) {
        $(target).one('shown.bs.collapse', function() {
          scrollToElement(target);
        });
      }
    });
  }

  // Initialize when DOM is ready
  $(document).ready(function() {
    handleHashLinks();
    handleHashOnLoad();
  });

  // Also handle when navigating with browser back/forward
  $(window).on('hashchange', function() {
    if (window.location.hash) {
      var hash = window.location.hash.substring(1);
      expandAndScrollTo(hash);
    }
  });
})();
