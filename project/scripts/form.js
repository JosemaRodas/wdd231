
const products = [
  { id: 'fc-1888', name: 'Fallout 4', 'avg-rating': 4.5 },
  { id: 'fc-2050', name: 'StarCraft II', 'averagerating': 4.7 },
  { id: 'fs-1987', name: 'Concord', 'averagerating': 3.5 },
  { id: 'ac-2000', name: 'Portal 2', 'averagerating': 3.9 },
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