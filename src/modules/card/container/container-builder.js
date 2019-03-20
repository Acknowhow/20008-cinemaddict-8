import concreteContainer from './container-concreter';

export default (cardsContainer) => {
  const containerMarkup = concreteContainer();

  cardsContainer.insertAdjacentHTML(`beforeend`, containerMarkup);

  return cardsContainer.querySelector(`.film-card`)
}
