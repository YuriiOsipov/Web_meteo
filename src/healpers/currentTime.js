export const formatDate = (date) => {
  const datePart = date.toLocaleDateString("uk-UA", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const timePart = date.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${datePart} ⏳ ${timePart}`;
};

export const renderCurrentTime = () => {
  const nowElement = document.querySelector(".now");
  const currentTime = new Date();

  const formattedTime = formatDate(currentTime);
  nowElement.textContent = `Зараз: ${formattedTime}`;
};

setInterval(renderCurrentTime, 60000);
