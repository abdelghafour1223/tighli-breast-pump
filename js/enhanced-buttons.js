document.addEventListener('DOMContentLoaded', function() {
  // Get theme settings
  const enableBoxShadow = true;
  const shadowIntensity = 5;
  const enableGradient = true;
  const enableGradientShine = true;
  
  // If neither effect is enabled, exit early
  if (!enableBoxShadow && !enableGradient) {
    return;
  }
  
  // Debug logging
  console.log('Enhanced Button Effects:', {
    enableBoxShadow: enableBoxShadow,
    shadowIntensity: shadowIntensity,
    enableGradient: enableGradient,
    enableGradientShine: enableGradientShine
  });
  
  // Define button selectors that should receive enhanced effects
  const buttonSelectors = [
    '.button-global-style',
    '.use-global-button-styling',
    '.button',
    '.btn',
    'button[type="submit"]',
    'input[type="submit"]',
    '.product-form__submit',
    '.shop-add-to-cart-button',
    '.cart__checkout-button',
    '.contact-button',
    '.contact__button',
    '.button--primary',
    '.claim-button',
    '.newsletter-form__button',
    '.field__button',
    '.theme-button',
    '.guarantee-section__cta',
    '.custom-hero__button'
  ];
  
  // Function to apply effects to buttons
  function applyButtonEffects() {
    buttonSelectors.forEach(selector => {
      const buttons = document.querySelectorAll(selector);
              buttons.forEach(button => {
         // Skip buttons that explicitly opt out or cart remove buttons
         // Cart remove buttons should remain simple and subtle
          if (button.classList.contains('button-section-override') || 
             button.classList.contains('no-enhanced-effects') ||
             button.classList.contains('cart-remove-button') ||
             button.classList.contains('button--tertiary') ||
             button.classList.contains('disable-global-button-styling')) {
            return;
          }
        
        // Apply box shadow effect if enabled
        if (enableBoxShadow) {
          button.classList.add('button-box-shadow');
          button.classList.add(`intensity-${shadowIntensity}`);
          console.log('Applied box shadow effect to:', button, 'with intensity:', shadowIntensity);
        }
        
        // Apply gradient effect if enabled
        if (enableGradient) {
          button.classList.add('button-gradient-effect');
          
          // Apply shine effect conditionally
          if (enableGradientShine) {
            button.classList.add('gradient-shine-enabled');
          } else {
            button.classList.remove('gradient-shine-enabled');
          }
          console.log('Applied gradient effect to:', button, 'with shine:', enableGradientShine);
        }
      });
    });
  }
  
  // Apply effects immediately
  applyButtonEffects();
  
  // Re-apply effects when new content is loaded (for AJAX/dynamic content)
  const observer = new MutationObserver(function(mutations) {
    let shouldReapply = false;
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === 1) { // Element node
          // Check if the added node contains buttons
          if (node.querySelector && buttonSelectors.some(selector => node.querySelector(selector))) {
            shouldReapply = true;
          }
          // Check if the added node itself is a button
          if (buttonSelectors.some(selector => node.matches && node.matches(selector))) {
            shouldReapply = true;
          }
        }
      });
    });
    
    if (shouldReapply) {
      setTimeout(applyButtonEffects, 50); // Small delay to ensure DOM is ready
    }
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

// Helper function to ensure button text override works correctly
        document.addEventListener('DOMContentLoaded', function () {

          document.querySelectorAll("[id^='ProductSkipToCheckoutButton-']").forEach((btn) => {
            btn.addEventListener("click", async (e) => {
              e.preventDefault();

              const productWrapper = btn.closest(".shop-add-to-cart-button").form || document;

              const variantInput = productWrapper.querySelector(".product-variant-id");
              const variantId = variantInput?.value;
              if (!variantId) return;

              // Ajout du produit au panier
              try {
                await fetch("/cart/clear.js", {
                  method: "POST",
                  credentials: "same-origin",
                });

                const res = await fetch("/cart/add.js", {
                  method: "POST",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: variantId,
                    quantity: 1,
                  }),
                });

                if (!res.ok) throw new Error("Erreur lors de l'ajout au panier");

                // Redirection vers le checkout
                window.location.href = "/checkout";
              } catch (error) {
                console.error("Erreur dans le bouton 'Acheter maintenant' :", error);
                alert("Une erreur est survenue. Merci de réessayer.");
              }
            });
          });


          if (!false) {
            const target = document.querySelector('#ProductSubmitButton-template--28684899876945__main .button-text');
          const originalText = target?.innerText;

          if (target) {
            const observer = new MutationObserver(() => {
              if (target.innerText !== originalText) {
                target.innerText = originalText;
              }
            });

            observer.observe(target, { childList: true, subtree: true, characterData: true });
          }
          }

          // Watch for cart update events
          document.addEventListener('cart:update', function () {
            setTimeout(restorePersistentButtonText, 50);
          });

          // Watch for section renders in theme editor
          document.addEventListener('shopify:section:load', restorePersistentButtonText);

          // Watch for variant changes
          document.addEventListener('variant:change', restorePersistentButtonText);

          function restorePersistentButtonText() {
            // First process buttons with text-override attribute
          }

          // Initial run
          restorePersistentButtonText();
        });