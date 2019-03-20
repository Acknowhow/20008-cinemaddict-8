export const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const getRandomArrayElement = (array) => {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

export const generateRandomText = (array, delimeter) => {
  const clonedArray = [...array];

  const randomIndex = getRandomIntInclusive(0, clonedArray.length - 1);
  const randomDeleteCount = getRandomIntInclusive(1, 3);

  return clonedArray.splice(randomIndex, randomDeleteCount).join(delimeter);
};

export const getAverageRating = (array) => {
  const clonedArray = [...array];

  const sum = clonedArray.reduce((acc, index) => acc + index);
  return (sum / clonedArray.length).toFixed(1);
};

export const getHoursMinutes = (seconds) => {
  return new Date(
      seconds * 1000 - 1000 * 60 * 60 * 3)
      .toLocaleString().replace(/:/g, ' ').substring(15);
};

export const getYear = (timestamp) => {
  return new Date(timestamp).getFullYear();
};

export const getImagePath = (image) => {
  return `./images/posters/${image}`;
};
