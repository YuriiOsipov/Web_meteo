export function updateWithDirection(windDeg) {
  const windIcon = document.getElementById("wind-direction-icon");
  const windText = document.getElementById("wind-direction-text");

  const iconRotation = (windDeg + 180) % 360;
  windIcon.style.transform = `rotate(${iconRotation}deg)`;

  const directions = ["Пн", "ПнСх", "Сх", "ПдСх", "Пд", "ПдЗх", "Зх", "ПнЗх"];
  const normalizeDegrees = (windDeg + 360) % 360;
  const index = Math.round(normalizeDegrees / 45) % 8;
  windText.textContent = directions[index] || "Н/Д";
}
