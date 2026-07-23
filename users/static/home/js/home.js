 (function () {
        console.log("🏥 MediCore_HMS · Premium Home page ready");

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
let doctorDatabase = [];

async function loadDoctors() {

    console.log("loadDoctors called");

    try {
        const response = await axios.get("/doctors/api/");

        console.log(response.data);

        if (response.data.success) {
            doctorDatabase = response.data.doctors;
            renderDoctors(doctorDatabase);
        }

    } catch (error) {
        console.error(error);
    }
}

    // =============================================
    // RENDER DOCTORS
    // =============================================
    function renderDoctors(doctors) {
          console.log("renderDoctors", doctors);

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

                    <div >${doc.name}</div>
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

    const btn = document.getElementById("refreshDoctors");

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating...';

    loadDoctors();

    setTimeout(() => {

        btn.innerHTML = '<i class="fas fa-rotate"></i> Refresh';

    }, 800);

}

    // =============================================
    // INITIAL RENDER
    // =============================================
document.addEventListener("DOMContentLoaded", function () {

    loadDoctors();

    document
        .getElementById("refreshDoctors")
        .addEventListener("click", refreshDoctors);

});