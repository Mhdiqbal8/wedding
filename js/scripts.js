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
