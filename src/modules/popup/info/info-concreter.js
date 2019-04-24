import Component from '../../../assets/concreter';

export default class Info extends Component {
  constructor(data) {
    super();
    this._audience = data.audience;
    this._title = data.title;
    this._image = data.image;
    this._overallRating = data.overallRating;
    this._originalTitle = data.originalTitle;
    this._rating = data.rating;
    this._actors = data.actors;
    this._writers = data.writers;
    this._director = data.director;
    this._description = data.description;
    this._releaseDate = data.releaseDateFormat;
    this._country = data.country;
    this._duration = data.duration;
    this._genre = data.genre;
  }

  get template() {
    return `<div>
              <div class="film-details__poster">
                <img class="film-details__poster-img" src="${this._image}" alt="">
        
                <p class="film-details__age">Audience: ${this._audience}+</p>
              </div>
      
              <div class="film-details__info">
                <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                    <h3 class="film-details__title">${this._title}</h3>
                    <p class="film-details__title-original">Original: ${this._originalTitle}</p>
                  </div>
        
                  <div class="film-details__rating">
                    <p class="film-details__total-rating">${this._overallRating}</p>
                    <p class="film-details__user-rating">Your rate ${this._rating}</p>
                  </div>
                </div>
        
                <table class="film-details__table">
                  <tr class="film-details__row">
                    <td class="film-details__term">Director</td>
                    <td class="film-details__cell">${this._director}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Writers</td>
                    <td class="film-details__cell">${this._writers.join(` `)}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Actors</td>
                    <td class="film-details__cell">${this._actors.join(`, `).trim()}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Release Date</td>
                    <td class="film-details__cell">${this._releaseDate} (${this._country.toUpperCase()})</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">${this._duration} min</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Country</td>
                    <td class="film-details__cell">${this._country.toUpperCase()}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Genres</td>
                    <td class="film-details__cell">${this._getGenres().join(``).trim()}</td>
                  </tr>
                </table>
        
                <p class="film-details__film-description">${this._description}</p>
              </div>
            </div>`;
  }

  _getGenres() {
    return this._genre.map((it) => `<span class="film-details__genre">${it}</span>`);
  }
}
