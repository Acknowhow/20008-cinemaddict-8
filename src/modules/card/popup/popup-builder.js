import ConcretePopup from './popup-concreter';

import {
  generateRandomText,
  getAverageRating,
  getRandomArrayElement
} from '../../../assets/handler';

export default (card) => {
  const {
    audiences, titles, ratings,
    actors, descriptions
  } = card;

  const audience = getRandomArrayElement(audiences);
  const title = getRandomArrayElement(titles);
  const averageRating = getAverageRating(ratings);
  const randomActors = generateRandomText(actors, ` `);
  const description = generateRandomText(descriptions);

  return new ConcretePopup(audience, title, averageRating, randomActors, description);
};
