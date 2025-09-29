import { switchTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/API/geoData.js";
import { getWeatherByForm } from "./src/components/inputForm.js";
import { renderCurrentTime } from "./src/healpers/currentTime.js";
import { scrollToTop } from "./src/components/scrollToTop.js";

export function initApp() {
  switchTheme();
  getGeoData();
  getWeatherByForm();
  renderCurrentTime();
  scrollToTop();
}
