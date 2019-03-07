const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const insert = (cards, container) => {
  let randomNumber;
  randomNumber = getRandomIntInclusive(0, cards.length - 1);
  container.innerHTML = ``;

  while (randomNumber >= 0) {

    container.insertAdjacentHTML(`beforeend`, cards[randomNumber]);
    randomNumber--;
  }
};

export const getRandomArrayElement = (array) => {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

export const generateRandomText = (array) => {
  const randomIndex = getRandomIntInclusive(0, array.length - 1)
  const randomDeleteCount = getRandomIntInclusive(1, 3)

  return array.splice(randomIndex, randomDeleteCount)
}

export const getAverageRating = (array) => {

  const sum = array.reduce((acc, index) => acc + index)
  return (sum / array.length).toFixed(1);
}

export const getHoursMinutes = (seconds) => {
  return new Date(
    seconds * 1000 - 1000 * 60 * 60 * 3)
    .toLocaleString().replace(/:/g, ' ').substring(15);
};

export const getYear = (timestamp) => {
  return new Date(timestamp).getFullYear();
}

export const getImagePath = (image) => {
  return `./images/posters/${image}`
}

export const insertTemplate = (container, markup) => {
  const template = document.createElement(`template`)

  template.innerHTML = markup
  container.appendChild(template.content)
}
