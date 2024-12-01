document.addEventListener("DOMContentLoaded", async () => {
    const directoryView = document.getElementById("directory-view");
    const toggleViewButton = document.getElementById("toggle-view");
  
    // Fetch members data
    const response = await fetch("data/members.json");
    const members = await response.json();
  
    // Function to display members
    function displayMembers(viewType) {
      directoryView.innerHTML = ""; // Clear current content
      members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.className = viewType === "grid" ? "card" : "list-item";
        memberCard.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        directoryView.appendChild(memberCard);
      });
    }
  
    // Initial view as grid
    displayMembers("grid");
  
    // Toggle between grid and list view
    toggleViewButton.addEventListener("click", () => {
      const isGrid = directoryView.classList.contains("grid-view");
      directoryView.className = isGrid ? "list-view" : "grid-view";
      displayMembers(isGrid ? "list" : "grid");
    });
  
    // Footer updates
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
  });
  