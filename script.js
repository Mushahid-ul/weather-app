// =======================================================
// WeatherAPI.com configuration
// =======================================================

const API_KEY = "4b1c97de69f34de29ec93416263107";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

// ===== DOM references =====
const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const statusMessage = document.getElementById("status-message");
const weatherCard = document.getElementById("weather-card");

const cityNameEl = document.getElementById("city-name");
const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("wind-speed");
const uvIndexEl = document.getElementById("uv-index");

// ===== Event listeners =====
searchForm.addEventListener("submit", handleSearchSubmit);

/**
 * Handles the form submission (Search button click or Enter key).
 */
function handleSearchSubmit(event) {
  event.preventDefault();

  const city = cityInput.value.trim();

  // Prevent empty searches
  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  fetchWeather(city);
}

/**
 * Fetches weather data for the given city from WeatherAPI.com.
 */
async function fetchWeather(city) {
  showLoading();

  try {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=yes`;
    const response = await fetch(url);

    if (!response.ok) {
      // WeatherAPI returns 400 for a city that isn't found
      throw new Error("not-found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    showError("City not found. Please check the spelling and try again.");
  }
}

/**
 * Displays the fetched weather data inside the card.
 */
function displayWeather(data) {
  const { location, current } = data;

  cityNameEl.textContent = `${location.name}, ${location.country}`;
  temperatureEl.textContent = `${current.temp_c}°C`;
  humidityEl.textContent = `${current.humidity}%`;
  windSpeedEl.textContent = `${current.wind_kph} km/h`;
  uvIndexEl.textContent = current.uv;

  clearStatus();
  weatherCard.classList.remove("hidden");
}

/**
 * Shows a loading message and hides the previous result/error.
 */
function showLoading() {
  weatherCard.classList.add("hidden");
  statusMessage.textContent = "Loading weather data...";
  statusMessage.classList.remove("error");
}

/**
 * Shows a friendly error message and hides the weather card.
 */
function showError(message) {
  weatherCard.classList.add("hidden");
  statusMessage.textContent = message;
  statusMessage.classList.add("error");
}

/**
 * Clears any status/loading/error message.
 */
function clearStatus() {
  statusMessage.textContent = "";
  statusMessage.classList.remove("error");
}
