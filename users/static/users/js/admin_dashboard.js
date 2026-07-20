  (function() {
    // ---- CHART ----
    const ctx = document.getElementById('apptChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Appointments',
          data: [8, 11, 9, 14, 12, 6],
          backgroundColor: ['#8bc4db','#5faecb','#3993b5','#1f7a9c','#1a6f8d','#145a75'],
          borderRadius: 6,
          barPercentage: 0.6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: '#e2edf5' }, ticks: { stepSize: 3, font: { size: 9 } } },
          x: { grid: { display: false }, ticks: { font: { size: 9 } } }
        }
      }
    });

    // ---- CREATE DOCTOR (demo) ----
    document.getElementById('createDocBtn').addEventListener('click', function(e) {
      e.preventDefault();
      const name = document.getElementById('docName').value.trim();
      const email = document.getElementById('docEmail').value.trim();
      const pass = document.getElementById('docPass').value.trim();
      if (!name || !email || !pass) {
        alert('⚠️ Please fill all doctor fields (name, email, password)');
        return;
      }
      alert(`✅ Doctor created (demo):\nName: ${name}\nEmail: ${email}\nPassword: ${pass}\n(added to table)`);
      // In real app: POST to API, refresh table
    });

    // ---- CREATE PATIENT (demo) ----
    document.getElementById('createPatBtn').addEventListener('click', function(e) {
      e.preventDefault();
      const name = document.getElementById('patName').value.trim();
      const phone = document.getElementById('patPhone').value.trim();
      const pass = document.getElementById('patPass').value.trim();
      if (!name || !phone || !pass) {
        alert('⚠️ Please fill all patient fields (name, phone, password)');
        return;
      }
      alert(`✅ Patient created (demo):\nName: ${name}\nPhone: ${phone}\nPassword: ${pass}\n(added to table)`);
    });

    // ---- extra: small interactions ----
    document.querySelectorAll('.btn-sm').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('🔍 Detail view (demo) - would show full record');
      });
    });

    // upload report
    document.querySelector('.btn-sm .fa-upload')?.closest('button')?.addEventListener('click', function() {
      alert('📤 Upload report dialog (demo)');
    });

    console.log('Admin dashboard ready');
  })();