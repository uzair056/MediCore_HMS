(function() {
    // ----- CHART (bar chart) -----
    const ctx = document.getElementById('visitChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Visits',
          data: [7, 9, 11, 13],
          backgroundColor: ['#8bc4db', '#5faecb', '#3993b5', '#1f7a9c'],
          borderRadius: 6,
          barPercentage: 0.6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#e2edf5', drawBorder: false },
            ticks: { stepSize: 2, font: { size: 10 } }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 } }
          }
        }
      }
    });

    // ----- LOGOUT (demo) -----
    const logoutBtns = document.querySelectorAll('#logoutBtn');
    logoutBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('🚪 Logged out (demo). Redirect to login page.');
        // In real project: window.location.href = '/login';
      });
    });

    // ----- DELETE ACCOUNT (demo) -----
    const deleteBtns = document.querySelectorAll('#deleteAccountBtn, #deleteAccountBtn2');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const confirmDelete = confirm('⚠️ Are you sure you want to permanently delete your account? This action cannot be undone.');
        if (confirmDelete) {
          alert('🗑️ Account deleted (demo). Redirect to home or login.');
          // real: perform delete API call
        }
      });
    });

    // user name dynamic (just for demo)
    console.log('Patient dashboard ready · Ahmed Raza');
  })();