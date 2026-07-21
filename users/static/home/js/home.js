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