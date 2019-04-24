import Component from '../../../assets/concreter';

export default class Main extends Component {
  constructor(data) {
    super();

    this._title = data.title;
    this._overallRating = data.overallRating;
    this._releaseYear = data.releaseYear;
    this._duration = data.durationFormat;
    this._genre = data.genre;
    this._image = data.image;
    this._description = data.description;
  }

  get template() {
    return `
      <div>
        <h3 class="film-card__title">${this._title}</h3>
        <p class="film-card__rating">${this._overallRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${this._releaseYear}</span>
          <span class="film-card__duration">${this._duration}</span>
          <span class="film-card__genre">${this._genre.join(`, `).trim()}</span>
        </p>
        <img src="${this._image}" alt="" class="film-card__poster">
        <p class="film-card__description">${this._description}</p>
      </div>`;
  }
}
