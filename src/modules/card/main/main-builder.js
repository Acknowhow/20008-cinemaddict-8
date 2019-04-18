import Main from './main-concreter';
import {
  getImagePath,
  getRandomArrayElement,
  getHoursMinutes
} from '../../../assets/handler';

export default (card, container) => {
  const {
    title, ratings, releaseYear,
    duration, genre, image, description
  } = card;


  const main = new Main({
    title, ratings, releaseYear,
    duration, genre, image, description});

  container.appendChild(main.render());

  return main;
};
