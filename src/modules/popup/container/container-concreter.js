import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor(src, title) {
    super();

    this._src = src;
    this._title = title;

    this._onClose = null;
    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
  }

  _onCloseButtonClick(e) {
    e.preventDefault();

    if (typeof this._onClose === `function`) {
      this._onClose();
    }
  }

  set onClose(fn) {
    this._onClose = fn;
  }

  get template() {
    return `
      <section class="film-details">
        <form class="film-details__inner" action="" method="get">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
          
          <!-- Info Builder -->

          </div>
      
          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" checked>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
      
          <section class="film-details__comments-wrap">

          <!-- Comment Builder -->
          
          </section>
      
          <section class="film-details__user-rating-wrap">
            <div class="film-details__user-rating-controls">
              <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
              <button class="film-details__watched-reset" type="button">undo</button>
            </div>
      
            <div class="film-details__user-score">
            
              <div class="film-details__user-rating-poster">
                <img src="${this._src}" alt="film-poster" class="film-details__user-rating-img">
              </div>
              
              <section class="film-details__user-rating-inner">
                <h3 class="film-details__user-rating-title">${this._title}</h3>
      
                <p class="film-details__user-rating-feelings">How you feel it?</p>
      
                <div class="film-details__user-rating-score">

                <!-- Rating Builder -->
           
                </div>
              </section>
            </div>
                
          </section>
        </form>
      </section>`;
  }

  bind() {
    this._element.querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, this._onCloseButtonClick);
  }

  unbind() {
    this._element.querySelector(`.film-details__close-btn`)
      .removeEventListener(`click`, this._onCloseButtonClick);
  }
}
