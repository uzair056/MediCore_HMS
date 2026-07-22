 (function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const toggleBtn = document.getElementById('togglePasswordBtn');
    const toggleIcon = document.getElementById('toggleIcon');
    const messageText = document.getElementById('messageText');
    const demoMsg = document.getElementById('demoMessage');

    // ----- TOGGLE PASSWORD VISIBILITY -----
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      if (type === 'text') {
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
      } else {
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
      }
    });

    // keyboard support for toggle button
    toggleBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });

    // ----- FORM SUBMISSION (demo validation) -----
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      let isValid = true;
      let errorMsg = '';

      // Email validation
      if (email === '') {
        isValid = false;
        errorMsg = '❌ Email is required.';
        emailInput.focus();
        emailInput.style.borderColor = '#c94a4a';
        setTimeout(() => emailInput.style.borderColor = '', 1500);
      } else if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        errorMsg = '❌ Please enter a valid email (e.g., name@domain.com).';
        emailInput.focus();
        emailInput.style.borderColor = '#c94a4a';
        setTimeout(() => emailInput.style.borderColor = '', 1500);
      }
      // Password validation
      else if (password === '') {
        isValid = false;
        errorMsg = '❌ Password cannot be empty.';
        passwordInput.focus();
        passwordInput.style.borderColor = '#c94a4a';
        setTimeout(() => passwordInput.style.borderColor = '', 1500);
      } else if (password.length < 4) {
        isValid = false;
        errorMsg = '❌ Password must be at least 4 characters.';
        passwordInput.focus();
        passwordInput.style.borderColor = '#c94a4a';
        setTimeout(() => passwordInput.style.borderColor = '', 1500);
      }

      // If invalid, show error and stop
      if (!isValid) {
        messageText.innerHTML = errorMsg;
        demoMsg.style.borderColor = '#c94a4a';
        demoMsg.style.background = 'rgba(201, 74, 74, 0.07)';
        setTimeout(() => {
          demoMsg.style.borderColor = '#b8d6e7';
          demoMsg.style.background = 'rgba(42, 138, 170, 0.06)';
        }, 2600);
        return;
      }

      // ----- SUCCESS: login accepted (demo) -----
      messageText.innerHTML = `✅ Welcome back, ${email.split('@')[0]}! (demo login)`;
      demoMsg.style.borderColor = '#3296b3';
      demoMsg.style.background = 'rgba(42, 138, 170, 0.12)';

      // clear any red border
      [emailInput, passwordInput].forEach(el => el.style.borderColor = '');

      // (optional) log data
      console.log('🔐 Login attempt (demo):', { email, password });

      // Reset border after a moment (just in case)
      setTimeout(() => {
        demoMsg.style.borderColor = '#b8d6e7';
        demoMsg.style.background = 'rgba(42, 138, 170, 0.06)';
      }, 3000);
    });

    // ----- Clear error border on focus & reset message if needed -----
    [emailInput, passwordInput].forEach(input => {
      input.addEventListener('focus', function() {
        this.style.borderColor = '';
        // if the message shows an error, reset to default hint
        if (messageText.innerHTML.includes('❌')) {
          messageText.innerHTML = 'Use demo@example.com / demo123';
          demoMsg.style.borderColor = '#b8d6e7';
          demoMsg.style.background = 'rgba(42, 138, 170, 0.06)';
        }
      });
    });

    // initial hint
    messageText.innerHTML = 'Use demo@example.com / demo123';
  })();