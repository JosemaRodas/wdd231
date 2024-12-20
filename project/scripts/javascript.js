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

const books = [
  {
    name: "Capital in the Twenty-First Century",
    author: "Thomas Piketty",
    release: "2013, August",
    price: 30,
    imageUrl:
    "https://m.media-amazon.com/images/I/61FuwnW2QeL._SL1500_.jpg"
  },
  {
    name: "The Wealth of Nations",
    author: "Adam Smith",
    release: "1776, May",
    price: 25,
    imageUrl:
    "https://m.media-amazon.com/images/I/71+VNu9VTBL._SL1360_.jpg"
  },
  {
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    release: "2011, June",
    price: 20,
    imageUrl:
    "https://m.media-amazon.com/images/I/61fdrEuPJwL._SL1500_.jpg"
  },
  {
    name: "The Road to Serfdom",
    author: "Friedrich Hayek",
    release: "1944, March",
    price: 15,
    imageUrl:
    "https://m.media-amazon.com/images/I/51DoPAUNPvL._SL1280_.jpg"
  },
];

function createBookCard(booksToDisplay) {
  const gridElement = document.querySelector(".grid");
  gridElement.innerHTML = ""; 

  booksToDisplay.forEach(book => {
    let card = document.createElement("section");
    let title = document.createElement("h3");
    let author = document.createElement("p");
    let releaseDate = document.createElement("p");
    let price = document.createElement("p");
    let image = document.createElement("img");

    title.textContent = book.name;
    author.innerHTML = `<span class="label">Author:</span> ${book.author}`;
    releaseDate.innerHTML = `<span class="label">Released:</span> ${book.release}`;
    price.innerHTML = `<span class="label">Price:</span> ${book.price} $`;

    image.setAttribute("src", book.imageUrl);
    image.setAttribute("alt", `${book.name} cover`);
    image.setAttribute("loading", "lazy");

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(releaseDate);
    card.appendChild(price);
    card.appendChild(image);

    gridElement.appendChild(card);
  });
}

createBookCard(books); 

filterLinks.forEach(link => {
  link.addEventListener('click', () => {
    const filter = link.textContent.trim().toLowerCase(); 
    let filteredBooks;
    switch (filter) {
      case "old":
        filteredBooks = books.filter(book => new Date(book.release).getFullYear() < 2000);
        break;
      case "new":
        filteredBooks = books.filter(book => new Date(book.release).getFullYear() >= 2000);
        break;
      case "cheapest":
        filteredBooks = books.filter(book => book.price < 20);
        break;
      default:
        console.error("Invalid filter:", filter);
        return;
    }
    createBookCard(filteredBooks);
  });
});

const products = [
  { id: 'bk-1888', name: 'Capital in the Twenty-First Century', 'avg-rating': 4.5 },
  { id: 'bk-2050', name: 'The Wealth of Nations', 'averagerating': 4.7 },
  { id: 'bk-1987', name: 'Thinking, Fast and Slow', 'averagerating': 4.3 },
  { id: 'bk-2000', name: 'The Road to Serfdom', 'averagerating': 4.1 },
];

document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.getElementById('product-name');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
});

window.addEventListener('load', function() {
  if (window.location.pathname.includes('review.html')) {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const reviewCount = localStorage.getItem('reviewCount') || 0;
  localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
  document.getElementById('review-counter').textContent = 'Number of completed reviews: ' + localStorage.getItem('reviewCount');
});
