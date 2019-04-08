import concreteMain from './main-concreter';
import {
  getImagePath,
  getRandomArrayElement,
  generateRandomText,
  getAverageRating,
  getYear, getHoursMinutes
} from '../../../assets/handler';

export default (card, container) => {
  const {
    titles, ratings, releaseTimestamps,
    durations, genres, images, descriptions
  } = card;

  console.log(container)

  const title = getRandomArrayElement(titles);
  const averageRating = getAverageRating(ratings);
  const releaseYear = getYear(getRandomArrayElement(releaseTimestamps));
  const duration = getHoursMinutes(getRandomArrayElement(durations));
  const genre = getRandomArrayElement(genres);
  const imagePath = getImagePath(getRandomArrayElement(images));
  const description = generateRandomText(descriptions, ``);

  const markup = concreteMain(
      title, averageRating, releaseYear,
      duration, genre, imagePath, description);

  container.insertAdjacentHTML(`afterbegin`, markup);
};
