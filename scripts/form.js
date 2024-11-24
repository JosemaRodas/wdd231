const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('last-modified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `Copyright © ${currentYear} 🌴 Jose Manuel Rodas 🌴 La Paz, Bolivia`;

lastModifiedElement.textContent = `Document last modified: ${document.lastModified}`;


const products = [
  { id: 'fc-1888', name: 'flux capacitor', 'avg-rating': 4.5 },
  { id: 'fc-2050', name: 'power laces', 'averagerating': 4.7 },
  { id: 'fs-1987', name: 'time circuits', 'averagerating': 3.5 },
  { id: 'ac-2000', name: 'low voltage reactor', 'averagerating': 3.9 },
  { id: 'jj-1969', name: 'warp equalizer', 'averagerating': 5.0 }
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