import { switchTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/API/geoData.js";
import { getWeatherByForm } from "./src/components/inputForm.js";

export function initApp() {
  switchTheme();
  getGeoData();
  getWeatherByForm();
}
