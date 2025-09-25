export const capitalizeCity = (city) => {
  if (!city) return city;

  const citiesWithHyphens = ["Івано-Франківськ", "Буэнос-Айрес"];

  if (citiesWithHyphens.includes(city)) {
    return city
      .toLowerCase()
      .split(/[\s-]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");
  }

  return city
    .toLowerCase()
    .split(/[\s-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
