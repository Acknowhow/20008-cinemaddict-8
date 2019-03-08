import concreteContainer from './container-concreter';

export default (cardsContainer, numValue) => {
  const containerMarkup = concreteContainer(numValue);

  cardsContainer.insertAdjacentHTML(`beforeend`, containerMarkup);

  return cardsContainer.querySelector(`.film-card--${numValue}`)
}
