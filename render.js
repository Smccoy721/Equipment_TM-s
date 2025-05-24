const container = document.getElementById("manual-cards");

manuals.forEach(manual => {
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
});


