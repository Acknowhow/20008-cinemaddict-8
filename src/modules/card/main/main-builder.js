import {getHoursMinutes} from '../../../assets/handler';
import Main from './main-concreter';

export default (card, container) => {
  const {
    title, ratings, releaseYear,
    duration, genre, image, description
  } = card;

  const durationFormat = getHoursMinutes(duration);

  const main = new Main({
    title, ratings, releaseYear,
    durationFormat, genre, image, description});

  container.appendChild(main.render());

  return main;
};
