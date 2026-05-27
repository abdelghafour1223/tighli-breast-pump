document.addEventListener('DOMContentLoaded', function() {
  // Handle scroll-to-first-section functionality
  const guaranteeButtons = document.querySelectorAll('.guarantee-section__cta[data-scroll-to-first-section]');
  
  guaranteeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      console.log('🎯 Scrolling to first section...');
      
      // Find the product details section or first section on the page (excluding header/navigation)
      const selectors = [
        // Product details section (highest priority)
        '[data-section-type="product"]',
        '.shopify-section[data-section-type="product"]',
        '.product-section',
        '.shop-product-section',
        '.product-details',
        '.product-template',
        '#ProductSection',
        '#shopify-section-product-template',
        
        // Most common first section patterns
        'main section:first-of-type',
        '.main-content section:first-of-type',
        '.page-content section:first-of-type',
        
        // Shopify section patterns
        '.shopify-section:not([data-section-type="header"]):not([data-section-type="announcement-bar"])',
        'section.shopify-section:not([data-section-type="header"])',
        
        // General section patterns
        'main > *:first-child',
        '.content section:first-of-type',
        'section:not(header):not([role="banner"])',
        
        // Fallback to any section
        'section:first-of-type',
        '[data-section-type]:not([data-section-type="header"])',
        
        // Last resort - any content element
        'main > div:first-child',
        '.main > *:first-child'
      ];
      
      let targetElement = null;
      let usedSelector = '';
      
      for (let selector of selectors) {
        try {
          const elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            // Get the first element that's not a header/nav
            for (let element of elements) {
              const tagName = element.tagName.toLowerCase();
              const sectionType = element.getAttribute('data-section-type');
              
              // Skip header/navigation elements
              if (tagName === 'header' || 
                  tagName === 'nav' || 
                  sectionType === 'header' || 
                  sectionType === 'announcement-bar' ||
                  element.getAttribute('role') === 'banner') {
                continue;
              }
              
              targetElement = element;
              usedSelector = selector;
              break;
            }
            
            if (targetElement) {
              console.log(`✅ Found first section with selector: ${selector}`);
              break;
            }
          }
        } catch (e) {
          // Skip invalid selectors
          continue;
        }
      }
      
      if (targetElement) {
        // Calculate offset for fixed headers
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const stickyHeader = document.querySelector('.sticky-header, .header-sticky, [style*="position: fixed"]')?.offsetHeight || 0;
        const adminBarHeight = document.querySelector('#admin_bar_iframe, .admin-bar')?.offsetHeight || 0;
        const announcementBar = document.querySelector('.announcement-bar, .promo-bar')?.offsetHeight || 0;
        
        const offset = Math.max(headerHeight, stickyHeader) + adminBarHeight + announcementBar + 20;
        
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
        
        console.log(`✅ Scrolled to first section using selector: ${usedSelector}`);
        
        // Optional: Add visual highlight to show successful targeting
        targetElement.style.transition = 'all 0.3s ease';
        targetElement.style.transform = 'scale(1.01)';
        setTimeout(() => {
          targetElement.style.transform = 'scale(1)';
        }, 300);
        
      } else {
        console.warn('❌ Could not find any suitable first section to scroll to');
        console.log('🔍 Available sections on page:');
        
        // Debug: Show available sections
        const allSections = document.querySelectorAll('section, .shopify-section, main > *, .main > *');
        allSections.forEach((section, index) => {
          const tagName = section.tagName.toLowerCase();
          const id = section.id || 'no-id';
          const sectionType = section.getAttribute('data-section-type') || 'no-section-type';
          const className = section.className || 'no-class';
          
          console.log(`   ${index + 1}. <${tagName}> id="${id}" data-section-type="${sectionType}" class="${className}"`);
        });
      }
    });
  });
});