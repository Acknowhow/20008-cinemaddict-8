let randomNumber;

const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const insert = (cards, container) => {
  randomNumber = getRandomIntInclusive(0, cards.length - 1);
  container.innerHTML = ``;

  while (randomNumber >= 0) {

    container.insertAdjacentHTML(`beforeend`, cards[randomNumber]);
    randomNumber--;
  }
}
