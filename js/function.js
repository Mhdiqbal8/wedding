function createGaleri(folderName, total, targetId) {
  const container = document.getElementById(targetId);

  // Validasi jika container tidak ditemukan di HTML
  if (!container) return;

  for (let i = 1; i <= total; i++) {
    const fileName = `img (${i}).webp`;
    const fullPath = `${folderName}/${fileName}`;

    const colDiv = document.createElement("div");
    colDiv.className = "col";

    colDiv.innerHTML = `
            <div class="card-portfolio">
                <img 
                    src="${fullPath}" 
                    alt="Gallery Image ${i}"
                    loading="lazy" 
                    onerror="this.parentElement.parentElement.remove();"
                >
            </div>
        `;

    container.appendChild(colDiv);
  }
}
