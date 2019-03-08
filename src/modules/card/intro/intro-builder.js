import concreteIntro from './intro-concreter';

import {
  getRandomArrayElement,
  getAverageRating,
  getHoursMinutes,
  getYear, insertTemplate} from '../../../assets/handler';


export default (container, titles, ratings, releaseTimestamps,
    durations, genres) => {

  const title = getRandomArrayElement(titles);
  const averageRating = getAverageRating(ratings);
  const releaseYear = getYear(getRandomArrayElement(releaseTimestamps));
  const duration = getHoursMinutes(getRandomArrayElement(durations));
  const genre = getRandomArrayElement(genres);

  const markup = concreteIntro(title, averageRating,
      releaseYear, duration, genre);

  insertTemplate(container, markup);
};

