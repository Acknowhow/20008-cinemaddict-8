import {getHoursMinutes, getYear} from '../../../assets/handler';
import Main from './main-concreter';

export default (card, container) => {
  const {
    title, overallRating, releaseDate,
    duration, genre, image, description
  } = card;



  const durationFormat = getHoursMinutes(duration);
  const releaseYear = getYear(releaseDate);

  const main = new Main({
    title, overallRating, releaseYear,
    durationFormat, genre, image, description});

  container.appendChild(main.render());

  return main;
};
