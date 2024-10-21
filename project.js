const apiKey = "ad931182052f41e014b1f38804070fbf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (response.ok) {
        // Update the DOM with the fetched weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    } else {
        alert("City not found. Please enter a valid city.");
    }
}

// Add an event listener to the search button
searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
