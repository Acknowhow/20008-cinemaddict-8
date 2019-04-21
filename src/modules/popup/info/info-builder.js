import moment from 'moment';
import Info from './info-concreter';
import {getHoursMinutes} from '../../../assets/handler';

export default (card, container) => {
  const {
    audience, title, overallRating,
    rating, actors, description, duration,
    genre, director, writers, releaseDate, country
  } = card;

  const infoContainer = container.querySelector(`.film-details__info-wrap`);

  const durationFormat = getHoursMinutes(duration);
  const releaseDateFormat = moment(`${releaseDate}`, `x`)
    .format(`MMMM D YYYY`);

  const info = new Info({
    audience, title, overallRating, rating,
    genre, director, writers, actors, description,
    country, durationFormat, releaseDateFormat});
  infoContainer.appendChild(info.render());

  return info;
}
