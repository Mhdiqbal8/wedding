// const loadExternalScripts = () => {
//   const resources = [
//     {
//       src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
//       integrity:
//         "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
//     },
//     {
//       src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js",
//       integrity:
//         "sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y",
//     },
//     {
//       src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
//     },
//   ];

//   resources.forEach((data) => {
//     const script = document.createElement("script");
//     script.src = data.src;
//     if (data.integrity) {
//       script.integrity = data.integrity;
//       script.crossOrigin = "anonymous";
//     }
//     script.async = false; // Menjaga urutan pemuatan script
//     document.body.appendChild(script);
//   });
// };

// loadExternalScripts();

const loadExternalScripts = () => {
  const resources = [
    {
      src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
      integrity:
        "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js",
      integrity:
        "sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y",
    },
    {
      src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
      isAOS: true, // Penanda khusus untuk AOS
    },
  ];

  resources.forEach((data) => {
    const script = document.createElement("script");
    script.src = data.src;

    if (data.integrity) {
      script.integrity = data.integrity;
      script.crossOrigin = "anonymous";
    }

    // Jalankan init AOS hanya setelah script selesai loading
    if (data.isAOS) {
      script.onload = () => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      };
    }

    document.body.appendChild(script);
  });
};

loadExternalScripts();

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide-image");
  const currentNumDisplay = document.getElementById("current-num");
  const totalNumDisplay = document.getElementById("total-num");
  const nextBtn = document.querySelector(".btn-next");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Set angka total secara otomatis
  totalNumDisplay.innerText = totalSlides.toString().padStart(2, "0");

  function updateSlider(index) {
    // Hapus class active dari slide lama
    slides.forEach((slide) => slide.classList.remove("active"));

    // Tambah class active ke slide baru
    slides[index].classList.add("active");

    // Update angka (index + 1 agar tidak mulai dari 0)
    currentNumDisplay.innerText = (index + 1).toString().padStart(2, "0");
  }

  nextBtn.addEventListener("click", function () {
    currentIndex++;

    // Jika sampai di slide terakhir, balik ke awal
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    updateSlider(currentIndex);
  });

  // Opsional: Auto Play setiap 5 detik
  setInterval(() => {
    nextBtn.click();
  }, 5000);
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
