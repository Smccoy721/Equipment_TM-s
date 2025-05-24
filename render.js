const container = document.getElementById("manual-cards");

if (manuals && Array.isArray(manuals)) { // Check if manuals is a valid array
  const sortedManuals = [...manuals].sort((a, b) => a.name.localeCompare(b.name)); // Create a sorted copy

  sortedManuals.forEach(manual => { // Iterate over the sorted copy
    if (manual && manual.name && manual.description && manual.files && Array.isArray(manual.files)) { // Check individual manual structure
      const card = document.createElement("div");
      card.className = "card";

      let innerHTML = `<h3>${manual.name}</h3><p>${manual.description}</p>`;

      manual.files.forEach(file => {
        // Extract the identifier from the filename
        let label;
          
        // Get the filename from the path
        const filename = file.split("/").pop();
          
        // These patterns match for different types of identifiers in military manual filenames
        const patterns = [
          /tm-\d+-\d+-\d+-(\d+-\d+)\.pdf/i,      // Pattern for "10-1", "10-2" etc.
          /tm-\d+-\d+-\d+-(\d+[a-z]?)\.pdf/i,    // Pattern for "13p", "14" etc.
          /tm-\d+-\d+-(\d+[a-z]?)\.pdf/i,        // Pattern for simpler formats
        ];
          
        // Try each pattern until we find a match
        for (const pattern of patterns) {
          const match = filename.match(pattern);
          if (match && match[1]) {
            label = match[1].toUpperCase();
            break;
          }
        }
          
        // If no pattern matched, use the fallback
        if (!label) {
          console.warn(`Could not extract ID from filename: ${filename}`);
          label = "Manual";
        }

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


