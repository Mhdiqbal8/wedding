// AOS.init();

async function loadHTML(elementId, fileName) {
  try {
    const response = await fetch(fileName);
    if (!response.ok) throw new Error("Gagal mengambil file.");

    const content = await response.text();
    document.getElementById(elementId).innerHTML = content;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

// Cara memanggilnya:
loadHTML("header-placeholder", "wedding/layouts/header.html");
loadHTML("footer-placeholder", "wedding/layouts/footer.html");
