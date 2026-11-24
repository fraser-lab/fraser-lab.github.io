// Handle hash links on the philosophy page
// This script ensures smooth scrolling to sections when clicking hash links

(function() {
  'use strict';

  // Configuration
  var HEADER_OFFSET_PX = 70; // Offset in pixels for fixed header when scrolling
  var HASH_LOAD_DELAY_MS = 50; // Delay in milliseconds to ensure DOM rendering is complete

  // Initialize the philosophy page functionality
  function init() {
    // Utility function to scroll to a target element
    function scrollToElement(element) {
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET_PX;

      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: offsetPosition,
        behavior: reduce ? 'auto' : 'smooth'
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
        }, HASH_LOAD_DELAY_MS);
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

    // Mark the sidebar link for the section currently being read: the last
    // section whose heading has scrolled past the top of the viewport.
    function trackActiveSection() {
      var links = document.querySelectorAll('.philosophy-sidebar a[href^="#"]');
      if (!links.length) return;
      var pairs = [];
      links.forEach(function(link) {
        var section = document.getElementById(link.getAttribute('href').substring(1));
        if (section) pairs.push({ link: link, section: section });
      });
      var current = null;
      var ticking = false;

      function update() {
        ticking = false;
        var active = pairs[0];
        for (var i = 0; i < pairs.length; i++) {
          if (pairs[i].section.getBoundingClientRect().top - HEADER_OFFSET_PX - 10 <= 0) {
            active = pairs[i];
          } else {
            break;
          }
        }
        // A sub-heading inside a collapsed list can't be seen, so highlight
        // its parent section instead.
        var target = active.link;
        var collapsed = target.closest('.philosophy-sidebar__sub[hidden]');
        if (collapsed) target = collapsed.parentNode.querySelector(':scope > a');
        if (target === current) return;
        if (current) current.removeAttribute('aria-current');
        target.setAttribute('aria-current', 'true');
        current = target;
      }

      window.addEventListener('scroll', function() {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      }, { passive: true });
      update();
    }

    // Add each section's ### sub-headers to the sidebar as a nested list.
    // Only the sidebar gets them; the mobile button TOC stays top-level only.
    function buildSidebarSubheadings() {
      var links = document.querySelectorAll('.philosophy-sidebar > ul > li > a[href^="#"]');
      links.forEach(function(link) {
        var heading = document.getElementById(link.getAttribute('href').substring(1));
        if (!heading) return;
        var sub = document.createElement('ul');
        sub.className = 'philosophy-sidebar__sub';
        for (var el = heading.nextElementSibling; el && el.tagName !== 'H2'; el = el.nextElementSibling) {
          if (el.tagName !== 'H3' || !el.id) continue;
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.href = '#' + el.id;
          a.textContent = el.textContent.trim();
          li.appendChild(a);
          sub.appendChild(li);
        }
        if (!sub.children.length) return;

        // Collapsed by default; the chevron button toggles it, and clicking
        // the section link itself opens it.
        var item = link.parentNode;
        var subId = 'toc-sub-' + heading.id;
        sub.id = subId;
        sub.hidden = true;
        item.classList.add('has-sub');

        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'philosophy-sidebar__toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', subId);
        toggle.setAttribute('aria-label', 'Show subsections of ' + link.textContent.trim());

        function setOpen(open) {
          sub.hidden = !open;
          toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
          toggle.setAttribute('aria-label',
            (open ? 'Hide' : 'Show') + ' subsections of ' + link.textContent.trim());
          // Let the active-section highlight move into or out of the list.
          window.dispatchEvent(new Event('scroll'));
        }
        toggle.addEventListener('click', function() { setOpen(sub.hidden); });
        link.addEventListener('click', function() { setOpen(true); });

        item.appendChild(toggle);
        item.appendChild(sub);
      });
    }

    // Initialize handlers
    buildSidebarSubheadings();
    trackActiveSection();
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
