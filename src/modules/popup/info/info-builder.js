import Info from './info-concreter';
import {
  generateRandomText,
  getAverageRating,
  getRandomArrayElement} from '../../../assets/handler';

export default (card, container) => {
  const {
    audiences, titles, ratings,
    actors, descriptions
  } = card;

  const infoContainer = container.querySelector(`.film-details__info-wrap`);

  const audience = getRandomArrayElement(audiences);
  const title = getRandomArrayElement(titles);
  const averageRating = getAverageRating(ratings);
  const randomActors = generateRandomText(actors, ` `);
  const description = generateRandomText(descriptions);

  const info = new Info(audience, title, averageRating, randomActors, description);
  infoContainer.appendChild(info.render());

  return info;
}
