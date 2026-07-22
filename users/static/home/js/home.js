 (function () {
        console.log("🏥 MediCore_HMS · Premium Home page ready");

        // Login / Register buttons
        document
          .querySelectorAll(".btn-login, .btn-register")
          .forEach((btn) => {
            btn.addEventListener("click", function (e) {
              e.preventDefault();
              const action = this.classList.contains("btn-login")
                ? "Login"
                : "Register";
              alert(
                `🔐 ${action} page (demo) — would redirect to ${action.toLowerCase()} form.`,
              );
            });
          });

        // Branch cards click
        document.querySelectorAll(".map-card").forEach((card) => {
          card.addEventListener("click", function () {
            const country =
              this.querySelector(".country-name")?.innerText || "branch";
            const city = this.querySelector(".city-name")?.innerText || "";
            const clinics =
              this.querySelector(".branch-badge")?.innerText.trim() ||
              "multiple clinics";
            alert(
              `📍 ${country} (${city})\n${clinics}\n\nView all doctors & appointments?`,
            );
          });
        });

        // Service cards click
        document.querySelectorAll(".service-card").forEach((card) => {
          card.addEventListener("click", function () {
            const service = this.querySelector("h4")?.innerText || "service";
            alert(`🩺 ${service} — detailed info (demo)`);
          });
        });

        // Specialist cards click
        document.querySelectorAll(".specialist-card").forEach((card) => {
          card.addEventListener("click", function () {
            const specialty =
              this.querySelector("h4")?.innerText || "specialist";
            alert(`👨‍⚕️ ${specialty} — view all specialists (demo)`);
          });
        });

        // Exercise cards click
        document.querySelectorAll(".exercise-card").forEach((card) => {
          card.addEventListener("click", function () {
            const exercise = this.querySelector("h5")?.innerText || "exercise";
            alert(`🏋️ ${exercise} — view routine & benefits (demo)`);
          });
        });

        // Dot hover effect
        document.querySelectorAll(".dot").forEach((dot) => {
          dot.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.5)";
            this.style.transition = "0.15s";
          });
          dot.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
          });
        });
      })();



    // doctor section

    // =============================================
    // DOCTOR DATA (simulated database)
    // =============================================
    const doctorDatabase = [
        {
            id: 1,
            name: "Dr. Ahmed Khan",
            specialty: "Cardiologist",
            experience: "12 years",
            rating: 5,
            reviews: 128,
            available: true,
            icon: "fa-heart",
            color: "#e74c3c"
        },
        {
            id: 2,
            name: "Dr. Sara Ali",
            specialty: "Dentist",
            experience: "8 years",
            rating: 5,
            reviews: 94,
            available: true,
            icon: "fa-tooth",
            color: "#3498db"
        },
        {
            id: 3,
            name: "Dr. Usman Malik",
            specialty: "Neurologist",
            experience: "15 years",
            rating: 5,
            reviews: 156,
            available: false,
            icon: "fa-brain",
            color: "#9b59b6"
        },
        {
            id: 4,
            name: "Dr. Fatima Noor",
            specialty: "Pediatrician",
            experience: "10 years",
            rating: 4,
            reviews: 87,
            available: true,
            icon: "fa-baby",
            color: "#2ecc71"
        },
        {
            id: 5,
            name: "Dr. Ali Hassan",
            specialty: "Orthopedic Surgeon",
            experience: "18 years",
            rating: 5,
            reviews: 203,
            available: true,
            icon: "fa-bone",
            color: "#e67e22"
        },
        {
            id: 6,
            name: "Dr. Zara Khan",
            specialty: "Dermatologist",
            experience: "7 years",
            rating: 4,
            reviews: 62,
            available: false,
            icon: "fa-hand",
            color: "#1abc9c"
        }
    ];

    // =============================================
    // RENDER DOCTORS
    // =============================================
    function renderDoctors(doctors) {
        const grid = document.getElementById('doctorsGrid');
        const countDisplay = document.getElementById('doctorCount');

        // Update count
        const available = doctors.filter(d => d.available).length;
        countDisplay.textContent = available;

        if (!doctors || doctors.length === 0) {
            grid.innerHTML = `
                <div class="no-doctors">
                    <i class="fas fa-user-md"></i>
                    No doctors available at the moment.<br>
                    <span style="font-size:0.9rem;">Please check back later.</span>
                </div>
            `;
            return;
        }

        let html = '';
        doctors.forEach(doc => {
            const statusClass = doc.available ? 'available' : 'offline';
            const statusText = doc.available ? '🟢 Available' : '🔴 Offline';
            const stars = '★'.repeat(Math.floor(doc.rating)) + '☆'.repeat(5 - Math.floor(doc.rating));

            html += `
                <div class="doctor-card" data-id="${doc.id}">
                    <div class="doctor-avatar" style="background: linear-gradient(135deg, ${doc.color}22, ${doc.color}44);">
                        <i class="fas ${doc.icon}" style="color:${doc.color};"></i>
                        <span class="status-badge ${statusClass}">
                            <i class="fas ${doc.available ? 'fa-check' : 'fa-times'}"></i>
                        </span>
                    </div>

                    <div class="doctor-name">${doc.name}</div>
                    <div class="doctor-specialty"><i class="fas fa-stethoscope" style="font-size:0.75rem;"></i> ${doc.specialty}</div>

                    <div class="doctor-experience">
                        <i class="fas fa-briefcase"></i> ${doc.experience} experience
                    </div>

                    <div class="doctor-rating">
                        ${stars}
                        <span class="rating-number">(${doc.reviews} reviews)</span>
                    </div>

                    <div class="status-text ${statusClass}">
                        ${statusText}
                    </div>

                    <button class="btn-profile" onclick="viewProfile(${doc.id})">
                        <i class="fas fa-arrow-right"></i> View Profile
                    </button>
                </div>
            `;
        });

        grid.innerHTML = html;
    }

    // =============================================
    // VIEW PROFILE (demo)
    // =============================================
    function viewProfile(id) {
        const doctor = doctorDatabase.find(d => d.id === id);
        if (doctor) {
            const status = doctor.available ? '🟢 Available' : '🔴 Offline';
            alert(
                `👨‍⚕️ ${doctor.name}\n` +
                `Specialty: ${doctor.specialty}\n` +
                `Experience: ${doctor.experience}\n` +
                `Rating: ${'★'.repeat(doctor.rating)} (${doctor.reviews} reviews)\n` +
                `Status: ${status}\n\n` +
                `📋 Full profile would open here.`
            );
        }
    }

    // =============================================
    // SHUFFLE / REFRESH (simulate live update)
    // =============================================
    function refreshDoctors() {
        // Simulate dynamic update: toggle some availability randomly
        const updated = doctorDatabase.map(doc => ({
            ...doc,
            available: Math.random() > 0.25 // 75% chance to be available
        }));

        // Sort: available first
        updated.sort((a, b) => (a.available === b.available) ? 0 : a.available ? -1 : 1);

        renderDoctors(updated);

        // Show refresh feedback
        const btn = document.getElementById('refreshDoctors');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating...';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-rotate"></i> Refresh';
        }, 800);

        console.log('🔄 Doctors refreshed (simulated live update)');
    }

    // =============================================
    // INITIAL RENDER
    // =============================================
    document.addEventListener('DOMContentLoaded', function() {
        // Initial: sort available first
        const sorted = [...doctorDatabase].sort((a, b) => (a.available === b.available) ? 0 : a.available ? -1 : 1);
        renderDoctors(sorted);

        // Refresh button
        document.getElementById('refreshDoctors').addEventListener('click', refreshDoctors);

        console.log('👨‍⚕️ Live Doctors section ready');
    });