 (function () {
        const ctx = document.getElementById("apptChart").getContext("2d");

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
              {
                label: "Appointments",
                data: [7, 9, 11, 8, 13, 6],
                backgroundColor: [
                  "#8bc4db",
                  "#5faecb",
                  "#3993b5",
                  "#1f7a9c",
                  "#1a6f8d",
                  "#145a75",
                ],
                borderRadius: 8,
                barPercentage: 0.6,
              },
            ],
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
                grid: { color: "#e2edf5", drawBorder: false },
                ticks: { stepSize: 3, font: { size: 10 } },
              },
              x: {
                grid: { display: false },
                ticks: { font: { size: 10 } },
              },
            },
          },
        });

        console.log("📊 Doctor dashboard ready");
      })();