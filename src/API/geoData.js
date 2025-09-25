import { apiKey, baseUrl } from "./apiKeyAndHost.js";
import { cityInput } from "../components/inputForm.js";
import { showError } from "../components/error.js";
import { isCyrillic } from "../healpers/checkCyrilic.js";
import { saveCityToLocalStorage } from "../healpers/saveCityToLocalStorage.js";

export const getGeoData = async () => {
  let city = cityInput.value.trim();

  if (!city) {
    return;
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

    console.log(lat, lon);
  } catch (error) {
    console.error(error.message);
    showError("Дані не прийшли");
  }
};
