export default (title, averageRating, releaseYear,
    duration, genre) => {
  return `
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${averageRating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${releaseYear}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genre}</span>
  </p>`;
};

