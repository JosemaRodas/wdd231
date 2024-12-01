async function getMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const container = document.getElementById('member-container');
    container.innerHTML = '';
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}">${member.website}</a></p>
        `;
        container.appendChild(memberCard);
    });
}

document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('member-container').classList.add('grid-view');
    document.getElementById('member-container').classList.remove('list-view');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('member-container').classList.add('list-view');
    document.getElementById('member-container').classList.remove('grid-view');
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

getMembers();
