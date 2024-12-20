async function getMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displaySpotlights(members);
}

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
            <p>${member.tagline}</p>
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}">${member.website}</a></p>
        `;
        spotlightsContainer.appendChild(spotlightCard);
    });
}

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

getMembers();

async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; 
    const city = 'La Paz';
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = await weatherResponse.json();
    displayWeather(weatherData);

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

getWeather();


document.addEventListener("DOMContentLoaded", function () {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    const currentDate = new Date().toLocaleDateString();
    document.getElementById("current-date").textContent = currentDate;

    const visitorMessage = document.getElementById("visitor-message");

    if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit, 10));
        const daysBetween = Math.floor((now - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            visitorMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitorMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    } else {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", now);
});
