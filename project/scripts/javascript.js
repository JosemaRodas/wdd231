const menuNav = document.querySelector('#nav');
const openBtn = document.querySelector('#abrir');
const closeBtn = document.querySelector('#cerrar');
const filterLinks = document.querySelectorAll('.nav-list a'); 

openBtn.addEventListener('click', () => menuNav.classList.add("visible"));
closeBtn.addEventListener('click', () => menuNav.classList.remove("visible"));

const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('last-modified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `Copyright © ${currentYear} | Jose Manuel Rodas | La Paz, Bolivia`;
lastModifiedElement.textContent = `Document last modified: ${document.lastModified}`;


const games = [
  {
    name: "Fallout 4",
    publisher: "Bethesda Game Studios",
    release: "2015, August",
    price: 15,
    imageUrl:
    "https://i.3djuegos.com/juegos/11529/fallout_4/fotos/ficha/fallout_4-3148336.webp"
  },
  {
    name: "StarCraft II",
    publisher: "Blizzard Entertainment ",
    release: "2009, May",
    price: 10,
    imageUrl:
    "https://th.bing.com/th/id/R.28fc3e852ca55685fe0fb8bab23015ee?rik=1%2fVwt%2fPhvAEkDw&pid=ImgRaw&r=0"
  },
  {
    name: "Concord",
    publisher: "Concord Entertainment",
    release: "2024, June",
    price: 60,
    imageUrl:
    "https://i.3djuegos.com/juegos/19107/concord/fotos/ficha/concord-5869188.webp"
  },
  {
    name: "Portal 2",
    publisher: "Valve",
    release: "2012, March",
    price: 30,
    imageUrl:
    "https://i.3djuegos.com/juegos/2826/portal_2/fotos/ficha/portal_2-1708304.webp"
  },
];

function createGameCard(gamesToDisplay) {
  const gridElement = document.querySelector(".grid");
  gridElement.innerHTML = ""; 

  gamesToDisplay.forEach(game => {
    let card = document.createElement("section");
    let title = document.createElement("h3");
    let publisher = document.createElement("p");
    let releaseDate = document.createElement("p");
    let price = document.createElement("p");
    let image = document.createElement("img");

    title.textContent = game.name;
    publisher.innerHTML = `<span class="label">Publisher:</span> ${game.publisher}`;
    releaseDate.innerHTML = `<span class="label">Released:</span> ${game.release}`;
    price.innerHTML = `<span class="label">Price:</span> ${game.price} $`;

    image.setAttribute("src", game.imageUrl);
    image.setAttribute("alt", `${game.name} cover`);
    image.setAttribute("loading", "lazy");

    card.appendChild(title);
    card.appendChild(publisher);
    card.appendChild(releaseDate);
    card.appendChild(price);
    card.appendChild(image);

    gridElement.appendChild(card);
  });
}

createGameCard(games); 

filterLinks.forEach(link => {
  link.addEventListener('click', () => {
    const filter = link.textContent.trim().toLowerCase(); 
    let filteredGames;
    switch (filter) {
      case "old":
        filteredGames = games.filter(game => new Date(game.release).getFullYear() < 2015);
        break;
      case "new":
        filteredGames = games.filter(game => new Date(game.release).getFullYear() >= 2015);
        break;
      case "cheapest":
        filteredGames = games.filter(game => game.price < 20);
        break;
      default:
        console.error("Invalid filter:", filter);
        return;
    }
    createGameCard(filteredGames);
  });
});



  const selectElement = document.getElementById('product-name');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });

  if (window.location.pathname.includes('review.html')) {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
  }


