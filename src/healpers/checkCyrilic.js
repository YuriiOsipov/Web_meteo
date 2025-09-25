import { showError } from "../components/error.js";

const cityInput = document.querySelector(".city-input");

export const isCyrillic = (text) => {
  const cyrillicPattern = /^[\u0400-\u052F]+$/;
  return cyrillicPattern.test(text);
};

cityInput.addEventListener("input", () => {
  const inputValue = cityInput.value;

  if (inputValue && !isCyrillic(inputValue)) {
    showError("Введіть назву на кирилиці");
  } else {
    showError("");
  }
});
