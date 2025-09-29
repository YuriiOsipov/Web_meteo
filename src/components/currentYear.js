export function getCurrentYear() {
  const yearElement = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}
