async function getMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
    displaySpotlights(members);
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

// Obtener datos del clima
async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Reemplaza con tu propia API Key de OpenWeatherMap
    const city = 'La Paz';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = await response.json();
    displayWeather(weatherData);

    // Obtener la previsión meteorológica de 3 días
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=3`);
    const forecastData = await forecastResponse.json();
    displayForecast(forecastData);
}

function displayWeather(weatherData) {
    const weatherBox = document.querySelector('.weather-box');
    weatherBox.innerHTML = `
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
    `;
}

function displayForecast(forecastData) {
    const forecastBox = document.querySelector('.forecast-box');
    forecastBox.innerHTML = '';
    forecastData.list.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <p>${new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>Temperature: ${day.main.temp}°C</p>
            <p>Weather: ${day.weather[0].description}</p>
        `;
        forecastBox.appendChild(forecastItem);
    });
}

// Mostrar los "spotlights" de los miembros
function displaySpotlights(members) {
    const spotlightsContainer = document.getElementById('spotlights-container');
    const goldAndSilverMembers = members.filter(member => member.membership === 2 || member.membership === 3);
    const randomSpotlights = goldAndSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
    spotlightsContainer.innerHTML = '';
    randomSpotlights.forEach(member => {
        const spotlightCard = document.createElement('div');
        spotlightCard.classList.add('spotlight-card');
        spotlightCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}">${member.website}</a></p>
            <p>Membership Level: ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
        `;
        spotlightsContainer.appendChild(spotlightCard);
    });
}

getWeather();
