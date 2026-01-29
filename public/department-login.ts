// Wrap everything in an IIFE to avoid global scope conflicts
(() => {
  // Handle form submission
  function handleSubmit(event: Event): void {
    event.preventDefault();
    
    // Get form values
    const userName = (document.querySelector('.input-field[type="text"]') as HTMLInputElement)?.value || '';
    const password = (document.querySelector('.input-field[type="password"]') as HTMLInputElement)?.value || '';
    const captcha = (document.querySelector('.captcha-input') as HTMLInputElement)?.value || '';
    
    const loginData = {
      userName,
      password,
      captcha
    };
    
    console.log('Login attempt with:', loginData);
  }

  // Handle form reset
  function handleReset(): void {
    // Reset form inputs
    const inputs = document.querySelectorAll('.input-field, .captcha-input') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => input.value = '');
    
    console.log('Form cleared');
  }

  // Handle captcha refresh
  function handleRefresh(): void {
    // Simulate captcha refresh
    const captchaPlaceholder = document.querySelector('.captcha-placeholder') as HTMLElement;
    if (captchaPlaceholder) {
      captchaPlaceholder.textContent = `[New Captcha: ${Math.random().toString(36).substring(2, 8).toUpperCase()}]`;
    }
    
    console.log('Captcha refreshed');
  }

  // Initialize the page
  function initializePage(): void {
    // Set up form event listeners
    const submitBtn = document.querySelector('.submit-btn') as HTMLButtonElement;
    const clearBtn = document.querySelector('.clear-btn') as HTMLButtonElement;
    const refreshText = document.querySelector('.refresh-text') as HTMLElement;
    
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