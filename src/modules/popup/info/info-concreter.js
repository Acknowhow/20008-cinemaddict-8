import Component from '../../../assets/concreter';

export default class Info extends Component {
  constructor(data) {
    super();
    this._audience = data.audience;
    this._title = data.title;
    this._averageRating = data.averageRating;
    this._actors = data.actors;
    this._description = data.description;
    this._duration = data.durationFormat;
  }

  get template() {
    return `<div>
              <div class="film-details__poster">
                <img class="film-details__poster-img" src="images/posters/blackmail.jpg" alt="incredables-2">
        
                <p class="film-details__age">${this._audience}</p>
              </div>
      
              <div class="film-details__info">
                <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                    <h3 class="film-details__title">${this._title}</h3>
                    <p class="film-details__title-original">Original: Невероятная семейка</p>
                  </div>
        
                  <div class="film-details__rating">
                    <p class="film-details__total-rating">${this._averageRating}</p>
                    <p class="film-details__user-rating">Your rate 8</p>
                  </div>
                </div>
        
                <table class="film-details__table">
                  <tr class="film-details__row">
                    <td class="film-details__term">Director</td>
                    <td class="film-details__cell">Brad Bird</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Writers</td>
                    <td class="film-details__cell">Brad Bird</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Actors</td>
                    <td class="film-details__cell">${this._actors}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Release Date</td>
                    <td class="film-details__cell">15 June 2018 (USA)</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">${this._duration}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Country</td>
                    <td class="film-details__cell">USA</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Genres</td>
                    <td class="film-details__cell">
                      <span class="film-details__genre">Animation</span>
                      <span class="film-details__genre">Action</span>
                      <span class="film-details__genre">Adventure</span></td>
                  </tr>
                </table>
        
                <p class="film-details__film-description">${this._description}</p>
              </div>
            </div>`;
  }
}
