const container = document.getElementById("manual-cards");

manuals.forEach(manual => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${manual.name}</h3>
    <p>${manual.description}</p>
    <button onclick="window.open('${manual.file}', '_blank')">View</button>
    <button onclick="window.location.href='${manual.file}'">Download</button>
  `;
  container.appendChild(card);
});
