import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor(data) {
    super();

    this._image = data.image;
    this._title = data.title;

    this._isFavorite = data.isFavorite;
    this._isWatched = data.isWatched;
    this._willWatch = data.willWatch;

    this._onClose = null;
    this._onSubmit = null;

    this._onAddToWatchList = null;
    this._onMarkAsWatched = null;

    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);

    this._onAddToWatchListButtonClick = this._onAddToWatchListButtonClick.bind(this);
    // this._onMarkAsWatchedButtonClick = this._onMarkAsWatchedButtonClick.bind(this);

  }

  _processForm(formData) {
    const entry = {
      score: null,
      comment: ``
    };

    const ContainerMapper = Container.createMapper(entry);

    for (const pair of formData.entries()) {

      const [property, value] = pair;
      if (ContainerMapper[property]) {

        value.trim();
        ContainerMapper[property](value);
      }
    }

    return entry;
  }

  _getWatchStatus() {
    let markup;

    if (this._isWatched) {
      markup = `<span class="film-details__watched-status film-details__watched-status&#45;&#45;active">Already watched</span>`
    }
    if (this._willWatch && !this._isWatched) {

      markup = `<span class="film-details__watched-status film-details__watched-status&#45;&#45;active">Will watch</span>`
    } if (!this._isWatched && !this._willWatch) {
      markup = `<span class="film-details__watched-status film-details__watched-status"></span>`
    }

    return markup;
  }

  _onCloseButtonClick(e) {
    e.preventDefault();

    if (typeof this._onClose === `function`) {
      this._onClose();
    }
  }

  _onSubmitAction() {

    const formData = new FormData(
      this._element.querySelector(`.film-details__inner`));

    const newData = this._processForm(formData);

    if (typeof this._onSubmit === `function`) {
      this._onSubmit(newData);
    }
  }

  _onAddToWatchListButtonClick(e) {
    e.preventDefault();

    const {target} = e;

    if (typeof this._onAddToWatchList === `function`) {
      this._onAddToWatchList(target);
    }
  }

  set onClose(fn) {
    this._onClose = fn;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
    this._onSubmitAction();
  }

  set onAddToWatchList(fn) {
    this._onAddToWatchList = fn;
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
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._willWatch && `checked`}>
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._isWatched && `checked`}>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._isFavorite && `checked`}>
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
      
          <section class="film-details__comments-wrap">

          <!-- Comment Builder -->
          
          </section>
      
          <section class="film-details__user-rating-wrap">
            <div class="film-details__user-rating-controls">${this._getWatchStatus()}
              <button class="film-details__watched-reset" type="button">undo</button>
            </div>
      
            <div class="film-details__user-score">
            
              <div class="film-details__user-rating-poster">
                <img src="${this._image}" alt="film-poster" class="film-details__user-rating-img">
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

    this._element.querySelector(`.film-details__control-label--watchlist`)
      .addEventListener(`click`, this._onAddToWatchListButtonClick);
  }

  unbind() {
    this._element.querySelector(`.film-details__close-btn`)
      .removeEventListener(`click`, this._onCloseButtonClick);

    this._element.querySelector(`.film-details__control-label--watchlist`)
      .removeEventListener(`click`, this._onAddToWatchListButtonClick);
  }

  static createMapper(target) {
    return {
      [`comment-emoji`]: (value) => target[`comment-emoji`] = value,
      comment: (value) => target.comment = value,
      score: (value) => target.score = value
    }
  }
}
