import { apiKey, baseUrl } from "./apiKeyAndHost.js";
import { cityInput } from "../components/inputForm.js";
import { showError } from "../components/error.js";
import { isCyrillic } from "../healpers/checkCyrilic.js";
import { saveCityToLocalStorage } from "../healpers/saveCityToLocalStorage.js";
import { getWeather, getForecast } from "./getWeatherAndForecast.js";
import { renderCurrentWeather } from "../components/currentWeather.js";
import { renderHourlyForecast } from "../components/hourlyForecast.js";
import { renderDailyForecast } from "../components/dailyForecast.js";

export const getGeoData = async () => {
  let city = cityInput.value.trim();
  if (!city) {
    try {
      const recentCities = JSON.parse(localStorage.getItem("recentCities"));
      city =
        Array.isArray(recentCities) && recentCities.length > 0
          ? recentCities[0]
          : "Київ";
    } catch (error) {
      city = "Київ";
    }
  }

  if (!isCyrillic(city)) {
    showError("Перевірте назву міста");
    return;
  }

  try {
    const geoUrl = `${baseUrl}/geo/1.0/direct`;
    const queryParams = new URLSearchParams({
      q: city,
      limit: 1,
      appid: apiKey,
    });

    const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`);

    const geoData = await geoResponse.json();

    if (!geoData.length) {
      throw Error("Місто не знайдено");
    }

    const { lat, lon } = geoData[0];

    saveCityToLocalStorage(city);

    const weatherData = await getWeather(lat, lon);
    const forecastData = await getForecast(lat, lon);

    console.log(weatherData);
    console.log(forecastData);

    renderCurrentWeather(weatherData, city);
    renderHourlyForecast(forecastData);
    renderDailyForecast(forecastData);
  } catch (error) {
    console.error(error.message);
    showError("Дані не прийшли");
  }
};
