(function() {
      const form = document.getElementById('registerForm');
      const nameInput = document.getElementById('fullName');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const toggleBtn = document.getElementById('togglePasswordBtn');
      const toggleIcon = document.getElementById('toggleIcon');
      const messageText = document.getElementById('messageText');

      // ----- TOGGLE PASSWORD VISIBILITY -----
      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();  // avoid any weirdness
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        // toggle icon
        if (type === 'text') {
          toggleIcon.classList.remove('fa-eye');
          toggleIcon.classList.add('fa-eye-slash');
        } else {
          toggleIcon.classList.remove('fa-eye-slash');
          toggleIcon.classList.add('fa-eye');
        }
      });

      // (optional) also toggle with keyboard "Enter" or "Space" on button
      toggleBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });

      // ----- FORM SUBMISSION (demo / validation) -----
      form.addEventListener('submit', function(e) {
        e.preventDefault();   // prevent page reload for demo

        // Get trimmed values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation (basic)
        let isValid = true;
        let errorMsg = '';

        // Name: non-empty
        if (name === '') {
          isValid = false;
          errorMsg = '❌ Please enter your full name.';
          nameInput.focus();
          nameInput.style.borderColor = '#c94a4a';
          setTimeout(() => nameInput.style.borderColor = '', 1500);
        }
        // Email: non-empty and basic format (just a quick check)
        else if (email === '') {
          isValid = false;
          errorMsg = '❌ Email address is required.';
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
        // Password: non-empty and min length 6
        else if (password === '') {
          isValid = false;
          errorMsg = '❌ Password cannot be empty.';
          passwordInput.focus();
          passwordInput.style.borderColor = '#c94a4a';
          setTimeout(() => passwordInput.style.borderColor = '', 1500);
        } else if (password.length < 6) {
          isValid = false;
          errorMsg = '❌ Password must be at least 6 characters.';
          passwordInput.focus();
          passwordInput.style.borderColor = '#c94a4a';
          setTimeout(() => passwordInput.style.borderColor = '', 1500);
        }

        // show feedback message
        if (!isValid) {
          messageText.innerHTML = errorMsg;
          // style the message box as warning
          const msgBox = document.getElementById('demoMessage');
          msgBox.style.borderColor = '#c94a4a';
          msgBox.style.background = 'rgba(201, 74, 74, 0.06)';
          setTimeout(() => {
            msgBox.style.borderColor = '#b3d3e3';
            msgBox.style.background = 'rgba(42, 138, 170, 0.06)';
          }, 2500);
          return;
        }

        // --- SUCCESS: everything is valid ---
        // Display a success message with the name (demo)
        messageText.innerHTML = `✅ Welcome, ${name}! Registration successful (demo).`;
        const msgBox = document.getElementById('demoMessage');
        msgBox.style.borderColor = '#3a9ebf';
        msgBox.style.background = 'rgba(42, 138, 170, 0.12)';

        // (Optional) you could log data or send to server
        console.log('📝 Registration Data:', { name, email, password });

        // Reset border colors (clear any red)
        [nameInput, emailInput, passwordInput].forEach(el => el.style.borderColor = '');

        // Reset form after 3 seconds? (optional) — we keep data for demo
        // but we can also clear fields if desired (not mandatory)
        // We'll leave as is, so user can see what they typed.
        // But we could also reset after a delay, but we keep it for demo
        // you can uncomment if you want auto-reset:
        // setTimeout(() => {
        //   form.reset();
        //   messageText.innerHTML = '✨ Form cleared. Register again?';
        //   msgBox.style.borderColor = '#b3d3e3';
        //   msgBox.style.background = 'rgba(42, 138, 170, 0.06)';
        //   // reset password toggle icon to default (if password was visible)
        //   if (passwordInput.getAttribute('type') === 'text') {
        //     passwordInput.setAttribute('type', 'password');
        //     toggleIcon.classList.remove('fa-eye-slash');
        //     toggleIcon.classList.add('fa-eye');
        //   }
        // }, 4000);
        // But we skip auto-reset for better UX — user can clear manually.
        // Also, if password was visible, keep it visible (user preference)
        // we do not force reset.
      });

      // ----- extra: clear "error" border on focus -----
      [nameInput, emailInput, passwordInput].forEach(input => {
        input.addEventListener('focus', function() {
          this.style.borderColor = ''; // remove red border on focus
          // also reset message to default if it's an error
          const msgBox = document.getElementById('demoMessage');
          if (msgBox.style.borderColor === '#c94a4a' || messageText.innerHTML.includes('❌')) {
            // only reset if it was an error message
            messageText.innerHTML = 'Fill in the fields & click Sign up';
            msgBox.style.borderColor = '#b3d3e3';
            msgBox.style.background = 'rgba(42, 138, 170, 0.06)';
          }
        });
      });

      // Also reset message when user types (optional) - but keep it simple

      // Initial hint
      messageText.innerHTML = 'Fill in the fields & click Sign up';
    })();