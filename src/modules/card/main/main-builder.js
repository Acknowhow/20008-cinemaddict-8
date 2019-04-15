import Main from './main-concreter';
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


  const title = getRandomArrayElement(titles);
  const releaseYear = getYear(getRandomArrayElement(releaseTimestamps));
  const duration = getHoursMinutes(getRandomArrayElement(durations));
  const genre = getRandomArrayElement(genres);
  const src = getImagePath(getRandomArrayElement(images));
  const description = generateRandomText(descriptions, ``);

  const main = new Main({
    title, ratings, releaseYear,
    duration, genre, src, description});

  container.appendChild(main.render());

  return main;
};
