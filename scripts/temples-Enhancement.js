const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const filterButtons = document.querySelectorAll('.nav-list a'); 

abrir.addEventListener('click', () => {
  nav.classList.add("visible");
});

cerrar.addEventListener('click', () => {
  nav.classList.remove("visible");
});

const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('last-modified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `Copyright © ${currentYear} 🌴 Jose Manuel Rodas 🌴 La Paz, Bolivia`;

lastModifiedElement.textContent = `Document last modified: ${document.lastModified}`;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Cochabamba Bolivia",
      location: "Cochabamba, bolivia",
      dedicated: "1995, January, 13",
      area: 33302,
      imageUrl:
      "https://noticias-bo.laiglesiadejesucristo.org/media/960x540/FB_20160511_10_52_22_Saved_Picture.jpg"
    },
    {
      templeName: "Montevideo Uruguay",
      location: "Montevideo, Uruguay",
      dedicated: "2001, march, 18",
      area: 10700,
      imageUrl:
      "https://media.ldscdn.org/images/media-library/temples/montevideo-uruguay/montevideo-uruguay-temple-lds-83476-wallpaper.jpg?download=true"
    },
    {
      templeName: "Buenos Aires Temple",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, September, 9",
      area: 33659,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/320%2C/0/default"
    },
    {
      templeName: "Madrid Temple",
      location: "Madrid, Spain",
      dedicated: "1999, March, 19",
      area: 116642,
      imageUrl:
      "https://es.411answers.com/uploads/12/12b2cb50049eb2dd09bcd8149cda3fcca9a8309b.jpg"
    },
  ];

function createTempleCard(filteredTemples) {
  const gridElement = document.querySelector(".grid");
  gridElement.innerHTML = ""; 

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} square feet`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    gridElement.appendChild(card);
  });
}

createTempleCard(temples); 

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterType = button.textContent.trim().toLowerCase(); 
    filterTemples(temples.filter(
      temple => {
        switch (filterType) {
          case "old":
            return new Date(temple.dedicated).getFullYear() < 1900;
          case "new":
            return new Date(temple.dedicated).getFullYear() > 2000;
          case "large":
            return temple.area > 90000;
          case "small":
            return temple.area < 10000;
          case "home":
            return true; 
          default:
            console.error("Invalid filter type:", filterType);
            return false;
        }
      }
    ));
  });
});

function filterTemples(filteredTemples) {
    createTempleCard(filteredTemples);
  }
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterType = button.dataset.filter; 
      let filteredTemples = [];
      switch (filterType) {
        case "old":
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
        case "new":
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
        case "large":
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
        case "small":
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
        case "home":
          filteredTemples = temples; 
          break;
        default:
          console.error("Invalid filter type:", filterType);
          return;
      }
      filterTemples(filteredTemples);
    });
  });
  