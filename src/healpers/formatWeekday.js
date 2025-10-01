export const formatWeekday = (date) => {
  const weekDayName = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п’ятниця",
    "субота",
  ];

  const weekDay = weekDayName[date.getDay()] || "Невідомо";
  return `${weekDay}`;
};
