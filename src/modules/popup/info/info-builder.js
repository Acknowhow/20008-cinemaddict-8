import Info from './info-concreter';
import {
  getAverageRating,
  getRandomArrayElement,
  getHoursMinutes} from '../../../assets/handler';

export default (card, container) => {
  const {
    audiences, title, ratings,
    actors, description, duration
  } = card;

  const infoContainer = container.querySelector(`.film-details__info-wrap`);

  const audience = getRandomArrayElement(audiences);
  const averageRating = getAverageRating(ratings);
  const durationFormat = getHoursMinutes(duration);

  const info = new Info({
    audience, title, averageRating,
    actors, description, durationFormat});
  infoContainer.appendChild(info.render());

  return info;
}
