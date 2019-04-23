import moment from 'moment';
import Info from './info-concreter';

export default (card, container) => {
  const {
    audience, title, image, overallRating,
    rating, actors, description, duration, originalTitle,
    genre, director, writers, releaseDate, country
  } = card;

  const infoContainer = container.querySelector(`.film-details__info-wrap`);

  const releaseDateFormat = moment(`${releaseDate}`, `x`)
    .format(`MMMM D YYYY`);

  const info = new Info({
    audience, title, image, overallRating, rating, originalTitle,
    genre, director, writers, actors, description,
    country, duration, releaseDateFormat});
  infoContainer.appendChild(info.render());

  return {info};
};
