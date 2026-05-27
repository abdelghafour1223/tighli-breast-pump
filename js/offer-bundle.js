document.addEventListener('DOMContentLoaded', function () {
  const orderForm = document.getElementById('orderForm');
  const orderQtyInput = document.getElementById('orderQty');
  const orderPriceInput = document.getElementById('orderPrice');
  const fullNameInput = document.getElementById('fullName');
  const fullAddressInput = document.getElementById('fullAddress');
  const phoneNumberInput = document.getElementById('phoneNumber');
  const stickyBar = document.getElementById('stickyBottomBar');
  const stickyCTAButton = document.getElementById('stickyCTAButton');
  const offerSection = document.querySelector('.offer-bundle-inline');

  // Sync initial preselected offer values if inputs exist
  if (orderQtyInput && !orderQtyInput.value) {
    orderQtyInput.value = '2';
  }
  if (orderPriceInput && !orderPriceInput.value) {
    orderPriceInput.value = '329';
  }

  // Scroll listener for the sticky bottom bar
  function handleScroll() {
    if (!stickyBar) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const showSticky = scrollY > 200;

    if (showSticky) {
      stickyBar.style.transform = 'translateY(0)';
    } else {
      stickyBar.style.transform = 'translateY(100%)';
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  // Initial check on load
  setTimeout(handleScroll, 200);

  // Click listener for sticky CTA button to scroll to inline offers
  if (stickyCTAButton && offerSection) {
    stickyCTAButton.addEventListener('click', function (e) {
      e.preventDefault();
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function () {
        if (fullNameInput) fullNameInput.focus();
      }, 800);
    });
  }

  // If there are any other offer card buttons on the page, make them scroll to the inline form
  document.querySelectorAll('.offer-card-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (offerSection) {
        offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(function () {
          if (fullNameInput) fullNameInput.focus();
        }, 800);
      }
    });
  });

  // Validation
  function clearErrors() {
    if (fullNameInput) fullNameInput.classList.remove('error');
    if (fullAddressInput) fullAddressInput.classList.remove('error');
    if (phoneNumberInput) phoneNumberInput.classList.remove('error');
  }

  function validateForm() {
    let isValid = true;
    clearErrors();

    // Name validation: at least 3 characters
    if (fullNameInput) {
      if (!fullNameInput.value.trim() || fullNameInput.value.trim().length < 3) {
        fullNameInput.classList.add('error');
        isValid = false;
      }
    }

    // Address validation: at least 5 characters
    if (fullAddressInput) {
      if (!fullAddressInput.value.trim() || fullAddressInput.value.trim().length < 5) {
        fullAddressInput.classList.add('error');
        isValid = false;
      }
    }

    // Phone validation: Moroccan format (starts with 05,06,07 + 8 digits = 10 total)
    if (phoneNumberInput) {
      const phoneClean = phoneNumberInput.value.replace(/[\s\-()]/g, '');
      const phoneRegex = /^(05|06|07)\d{8}$/;
      if (!phoneRegex.test(phoneClean)) {
        phoneNumberInput.classList.add('error');
        isValid = false;
      }
    }

    return isValid;
  }

  // Form submission
  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateForm()) {
        // Shake the first error field
        const firstError = orderForm.querySelector('.error');
        if (firstError) {
          firstError.style.animation = 'shake 0.4s ease';
          setTimeout(function () {
            firstError.style.animation = '';
          }, 400);
          firstError.focus();
        }
        return;
      }

      // Show loading state
      const submitBtn = orderForm.querySelector('.order-submit-btn');
      const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
      const btnLoading = submitBtn ? submitBtn.querySelector('.btn-loading') : null;

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.style.display = 'none';
      if (btnLoading) btnLoading.style.display = 'inline';

      // Collect order data
      var orderData = {
        fullName: fullNameInput.value.trim(),
        fullAddress: fullAddressInput.value.trim(),
        phoneNumber: phoneNumberInput.value.replace(/[\s\-()]/g, ''),
        qty: parseInt(orderQtyInput.value || 2),
        price: parseInt(orderPriceInput.value || 329),
        total: parseInt(orderPriceInput.value || 329),
        product: 'مضخة الحليب اللاسلكية Tighli',
        timestamp: new Date().toISOString(),
        orderId: 'TG-' + Date.now().toString(36).toUpperCase()
      };

      // Simulate a brief processing delay then redirect to thank-you page
      setTimeout(function () {
        // Store order data in localStorage for the thank-you page
        localStorage.setItem('tighli_order', JSON.stringify(orderData));

        // Redirect to thank-you page
        window.location.href = 'thank-you.html';
      }, 1200);
    });
  }

  // Real-time phone formatting
  if (phoneNumberInput) {
    phoneNumberInput.addEventListener('input', function () {
      var val = this.value.replace(/[^\d]/g, '');
      if (val.length > 10) {
        val = val.substring(0, 10);
      }
      this.value = val;
    });
  }

  // Remove error on input
  [fullNameInput, fullAddressInput, phoneNumberInput].forEach(function (input) {
    if (input) {
      input.addEventListener('input', function () {
        this.classList.remove('error');
      });
    }
  });
});

// Shake animation
(function () {
  var style = document.createElement('style');
  style.textContent = '@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}';
  document.head.appendChild(style);
})();
