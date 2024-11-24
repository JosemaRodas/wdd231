const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('last-modified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `Copyright © ${currentYear} 🌴 Jose Manuel Rodas 🌴 La Paz, Bolivia`;

const lastModifiedDate = new Date(document.lastModified);
lastModifiedDate.setHours(lastModifiedDate.getHours() - 5);
const formattedDate = lastModifiedDate.toLocaleString();

lastModifiedElement.textContent = `Document last modified: ${formattedDate}`;
