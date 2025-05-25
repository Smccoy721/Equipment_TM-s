const container = document.getElementById("manual-cards");
const typeFilters = document.getElementById("type-filters");
const showAllButton = document.getElementById("show-all");
const searchInput = document.getElementById("search-input");

// Track active filters
let activeFilters = {
  types: [],
  searchTerm: ""
};

if (manuals && Array.isArray(manuals)) {
  // Extract unique equipment types
  const equipmentTypes = [...new Set(manuals.map(manual => manual.type))].sort();
  
  // Create filter checkboxes
  equipmentTypes.forEach(type => {
    const typeContainer = document.createElement("span");
    typeContainer.style.margin = "0 10px";
    typeContainer.style.display = "inline-block";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `filter-${type.replace(/\s+/g, "-").toLowerCase()}`;
    checkbox.value = type;
    checkbox.addEventListener("change", updateFilters);
    
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = type;
    label.style.marginLeft = "5px";
    
    typeContainer.appendChild(checkbox);
    typeContainer.appendChild(label);
    typeFilters.appendChild(typeContainer);
  });
  
  // Show all button handler
  showAllButton.addEventListener("click", () => {
    // Reset all checkboxes
    document.querySelectorAll("#type-filters input[type=checkbox]")
      .forEach(cb => cb.checked = false);
    
    // Clear search
    searchInput.value = "";
    
    // Reset filters and display all
    activeFilters = { types: [], searchTerm: "" };
    updateCards();
  });
  
  // Search input handler
  searchInput.addEventListener("input", () => {
    activeFilters.searchTerm = searchInput.value.trim().toLowerCase();
    updateFilters();
  });
  
  // Initial display
  updateCards();
} else {
  console.error("'manuals' array is not defined or not an array. No cards will be rendered.");
}

function updateFilters() {
  // Get selected equipment types
  activeFilters.types = Array.from(
    document.querySelectorAll("#type-filters input:checked")
  ).map(cb => cb.value);
  
  // Update search term
  activeFilters.searchTerm = searchInput.value.trim().toLowerCase();
  
  // Update displayed cards
  updateCards();
}

function updateCards() {
  // Clear existing cards
  container.innerHTML = "";
  
  if (manuals && Array.isArray(manuals)) {
    // Filter and sort manuals
    let filteredManuals = [...manuals];
    
    // Apply type filter if any types are selected
    if (activeFilters.types.length > 0) {
      filteredManuals = filteredManuals.filter(manual => 
        activeFilters.types.includes(manual.type)
      );
    }
    
    // Apply search filter if search term exists
    if (activeFilters.searchTerm) {
      filteredManuals = filteredManuals.filter(manual => 
        manual.name.toLowerCase().includes(activeFilters.searchTerm) || 
        manual.description.toLowerCase().includes(activeFilters.searchTerm)
      );
    }
    
    // Sort alphabetically
    filteredManuals.sort((a, b) => a.name.localeCompare(b.name));
    
    // Generate cards for filtered manuals
    filteredManuals.forEach(manual => {
      if (manual && manual.name && manual.description && manual.files && Array.isArray(manual.files)) {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.type = manual.type; // Add data attribute for potential CSS styling

        let innerHTML = `<h3>${manual.name}</h3><p>${manual.description}</p>`;

        manual.files.forEach(file => {
          // Extract the identifier from the filename
          let label;
            
          // Get the filename from the path
          const filename = file.split("/").pop();          // These patterns match for different types of identifiers in military manual filenames
          const patterns = [
            /tm-\d+-\d+-\d+-(\d+-\d+)\.pdf/i,      // Pattern for "10-1", "10-2" etc.
            /tm-\d+-\d+-\d+-(\d+[a-z]?)\.pdf/i,    // Pattern for "13p", "14" etc.
            /tm-\d+-\d+-(\d+[a-z]?)\.pdf/i,        // Pattern for simpler formats
            /(\d+-\d+-\d+-\d+-\d+)\.pdf/i,         // Pattern for files starting with numbers like "9-2320-392-10-1.pdf"
            /(\d+-\d+-\d+-\d+[a-z]?)\.pdf/i,       // Pattern for files starting with numbers like "9-2320-392-14p.pdf"
          ];
            
          // Try each pattern until we find a match
          for (const pattern of patterns) {
            const match = filename.match(pattern);
            if (match && match[1]) {
              // For patterns that capture the full number sequence, extract just the relevant part
              if (match[1].includes('-')) {
                const parts = match[1].split('-');
                if (parts.length >= 2) {
                  // Take the last two parts for patterns like "9-2320-392-10-1"
                  label = parts.slice(-2).join('-').toUpperCase();
                } else {
                  label = match[1].toUpperCase();
                }
              } else {
                label = match[1].toUpperCase();
              }
              break;
            }
          }
            
          // If no pattern matched, use the fallback
          if (!label) {
            console.warn(`Could not extract ID from filename: ${filename}`);
            label = "Manual";
          }          innerHTML += `
            <div style="margin-bottom: 10px;">
              <button onclick="openPDF('${file}')">View ${label}</button>
            </div>
          `;
        });

        card.innerHTML = innerHTML;
        container.appendChild(card);
      }
    });
    
    // Show message if no results
    if (filteredManuals.length === 0) {
      const noResults = document.createElement("div");
      noResults.style.gridColumn = "1 / -1"; // Span all columns
      noResults.style.padding = "20px";
      noResults.style.textAlign = "center";
      noResults.style.color = "#666";
      noResults.textContent = "No matching manuals found.";
      container.appendChild(noResults);
    }
  }
}

// Function to open PDFs with proper LFS support
function openPDF(filePath) {
  // Check if we're on GitHub Pages or local
  if (window.location.hostname === 'smccoy721.github.io') {
    // For GitHub Pages with LFS, use PDF.js viewer to display the PDF
    const lfsUrl = `https://github.com/Smccoy721/Equipment_TM-s/raw/main/${filePath}`;
    const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(lfsUrl)}`;
    window.open(viewerUrl, '_blank');
  } else {
    // For local testing, use relative path
    window.open(filePath, '_blank');
  }
}


