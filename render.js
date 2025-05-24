const container = document.getElementById("manual-cards");

if (manuals && Array.isArray(manuals)) { // Check if manuals is a valid array
  const sortedManuals = [...manuals].sort((a, b) => a.name.localeCompare(b.name)); // Create a sorted copy

  sortedManuals.forEach(manual => { // Iterate over the sorted copy
    if (manual && manual.name && manual.description && manual.files && Array.isArray(manual.files)) { // Check individual manual structure
      const card = document.createElement("div");
      card.className = "card";

      let innerHTML = `<h3>${manual.name}</h3><p>${manual.description}</p>`;

      manual.files.forEach(file => {
        const label = (file.match(/(\d{2}-\d{1}|-?\d{2,3}[a-z]?)\.pdf/i)?.[1] || "Manual").toUpperCase();


        innerHTML += `
          <div style="margin-bottom: 10px;">
            <button onclick="window.open('${file}', '_blank')">View ${label}</button>
          </div>
        `;
      });

      card.innerHTML = innerHTML;
      container.appendChild(card);
    } else {
      console.warn("Skipping invalid manual object:", manual);
    }
  });
} else {
  console.error("'manuals' array is not defined or not an array. No cards will be rendered.");
}


