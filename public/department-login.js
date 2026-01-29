// Wrap everything in an IIFE to avoid global scope conflicts
(function() {
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    var userName = (document.querySelector('.input-field[type="text"]') || {}).value || '';
    var password = (document.querySelector('.input-field[type="password"]') || {}).value || '';
    var captcha = (document.querySelector('.captcha-input') || {}).value || '';
    
    var loginData = {
      userName: userName,
      password: password,
      captcha: captcha
    };
    
    console.log('Login attempt with:', loginData);
  }

  // Handle form reset
  function handleReset() {
    // Reset form inputs
    var inputs = document.querySelectorAll('.input-field, .captcha-input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
    
    console.log('Form cleared');
  }

  // Handle captcha refresh
  function handleRefresh() {
    // Simulate captcha refresh
    var captchaPlaceholder = document.querySelector('.captcha-placeholder');
    if (captchaPlaceholder) {
      var randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
      captchaPlaceholder.textContent = '[New Captcha: ' + randomString + ']';
    }
    
    console.log('Captcha refreshed');
  }

  // Initialize the page
  function initializePage() {
    // Set up form event listeners
    var submitBtn = document.querySelector('.submit-btn');
    var clearBtn = document.querySelector('.clear-btn');
    var refreshText = document.querySelector('.refresh-text');
    
    if (submitBtn) {
      submitBtn.addEventListener('click', handleSubmit);
    }
    
    if (clearBtn) {
      clearBtn.addEventListener('click', handleReset);
    }
    
    if (refreshText) {
      refreshText.addEventListener('click', handleRefresh);
    }
    
    console.log('Department Login page initialized');
  }

  // Execute when DOM is loaded
  document.addEventListener('DOMContentLoaded', initializePage);
})();