export const updateHumidityScale = (humidyty) => {
  const parameter = document.querySelector(".parameter");

  parameter.style.width = `${humidyty}%`;
};
