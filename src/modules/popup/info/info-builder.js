import Info from './info-concreter';
import {
  getAverageRating,
  getRandomArrayElement} from '../../../assets/handler';

export default (card, container) => {
  const {
    audiences, title, ratings,
    actors, description
  } = card;

  const infoContainer = container.querySelector(`.film-details__info-wrap`);

  const audience = getRandomArrayElement(audiences);
  const averageRating = getAverageRating(ratings);

  const info = new Info(audience, title, averageRating, actors, description);
  infoContainer.appendChild(info.render());

  return info;
}
