import moment from 'moment';
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
    this._onControls = null;
    this._onRating = null;
    this._onUndo = null;

    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
    this._onControlsButtonClick = this._onControlsButtonClick.bind(this);
    this._onRatingButtonClick = this._onRatingButtonClick.bind(this);
    this._onUndoButtonClick = this._onUndoButtonClick.bind(this);
  }

  _processForm(formData) {
    const entry = {
      'comment': {
        'author': this._element.querySelector(`.film-details__comment-author`).innerHTML,
        'date': moment().valueOf(),
        'comment': ``,
        'emotion': ``,
      }
    };

    const FormMapper = Container.formMapper(entry);
    for (const pair of formData.entries()) {

      const [property, value] = pair;
      if (FormMapper[property]) {

        value.trim();
        FormMapper[property](value);
      }
    }

    return entry;
  }

  _onSubmitAction() {

    const formData = new FormData(
      this._element.querySelector(`.film-details__inner`));

    const newData = this._processForm(formData);

    if (typeof this._onSubmit === `function`) {
      this._onSubmit(newData);
    }
  }

  _onCloseKeyAction() {
    if (typeof this._onClose === `function` &&
      this._onClose.length > 0) {

      this._onClose();
    }
  }

  _onCloseButtonClick(e) {
    e.preventDefault();

    if (typeof this._onClose === `function`) {
      this._onClose();
    }
  }

  _onRatingButtonClick(e) {
    e.preventDefault();

    const entry = {
      rating: null
    };

    const {target} = e;

    if (typeof this._onRating === `function` &&
      target.tagName.toUpperCase() === `LABEL`) {

      const ratingValue = target.attributes[`for`].nodeValue;
      const ratingInput = this._element.querySelector(`#${ratingValue}`);

      entry.rating = parseInt(ratingInput.value, 10);
      ratingInput.checked = true;

      this._onRating(entry);
    }
  }

  _onControlsButtonClick(e) {
    e.preventDefault();

    const entry = {
      willWatch: this._willWatch,
      isWatched: this._isWatched,
      isFavorite: this._isFavorite
    };
    const {target} = e;

    if (typeof this._onControls === `function` &&
      target.tagName.toUpperCase() === `LABEL`) {

      const controlValue = target.attributes[`for`].nodeValue;
      const controlInput = this._element.querySelector(`#${controlValue}`);

      const ContainerIsChecked = Container.getInputState(controlInput);
      const StateMapper = Container.stateMapper(entry);

      StateMapper[controlValue](ContainerIsChecked);

      this._onControls(entry);
    }
  }

  _onUndoButtonClick(e) {
    e.preventDefault();

    const {target} = e;

    if (typeof this._onUndo === `function` &&
      target.tagName.toUpperCase() === `BUTTON`) {

      this._onUndo(target)
    }
  }

  set onRating(fn) {
    this._onRating = fn;
  }

  set onClose(fn) {
    this._onClose = fn;
    this._onCloseKeyAction();
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
    this._onSubmitAction();
  }

  set onControls(fn) {
    this._onControls = fn;
  }

  set onUndo(fn) {
    this._onUndo = fn;
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
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._willWatch ? `checked` : ``}>
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._isWatched ? `checked` : ``}>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._isFavorite ? `checked` : ``}>
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
      
          <section class="film-details__comments-wrap">

          <!-- Comment Builder -->
          
          </section>
      
          <section class="film-details__user-rating-wrap">
            <div class="film-details__user-rating-controls">
              <span class="film-details__watched-status film-details__watched-status"></span>
              <button class="film-details__watched-reset visually-hidden" type="button">Undo</button>
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

    this._element.querySelector(`.film-details__controls`)
      .addEventListener(`click`, this._onControlsButtonClick);

    this._element.querySelector(`.film-details__user-rating-score`)
      .addEventListener(`click`, this._onRatingButtonClick);

    this._element.querySelector(`
      .film-details__watched-reset`).addEventListener(`click`, this._onUndoButtonClick);
  }

  unbind() {
    this._element.querySelector(`.film-details__close-btn`)
      .removeEventListener(`click`, this._onCloseButtonClick);

    this._element.querySelector(`.film-details__controls`)
      .removeEventListener(`click`, this._onControlsButtonClick);

    this._element.querySelector(`.film-details__user-rating-score`)
      .removeEventListener(`click`, this._onRatingButtonClick);
  }

  static checkState(watchState) {
    if (watchState.classList.contains(`film-details__watched-status--active`)) {
      watchState.classList.remove(`film-details__watched-status--active`);
    }
  }

  static stateMapper(target) {
    return {
      watchlist: (value) => target.willWatch = value,
      watched: (value) => target.isWatched = value,
      favorite: (value) => target.isFavorite = value
    }
  }

  static formMapper(target) {
    return {
      [`comment-emoji`]: (value) => target.comment[`emotion`] = value,
      comment: (value) => target.comment.comment = value.trim(),
    }
  }

  static getInputState(input) {
    let isChecked;

    if (input.hasAttribute(`checked`)) {
      input.removeAttribute(`checked`);

      isChecked = false;
    } else {
      input.setAttribute(`checked`, `checked`);

      isChecked = true;
    }
    return isChecked;
  }

  enable() {
    this._element.querySelector(`
      .film-details__watched-reset`).classList.remove(`visually-hidden`);
  }

  disable() {
    this._element.querySelector(`
      .film-details__watched-reset`).classList.add(`visually-hidden`);
  }

  shake() {
    const ANIMATION_TIMEOUT = 600;
    this._element.style.animation = `shake ${ANIMATION_TIMEOUT / 1000}s`;

    setTimeout(() => {
      this._element.style.animation = ``
    }, ANIMATION_TIMEOUT);
  }

  updateState() {
    const watchState = this._element.querySelector(`
      .film-details__watched-status`);

    Container.checkState(watchState);

    if (this._isWatched) {
      watchState.classList.add(`film-details__watched-status--active`);
      watchState.innerHTML = `Already watched`;
    }

    if (this._willWatch && !this._isWatched) {
      watchState.classList.add(`film-details__watched-status--active`);
      watchState.innerHTML = `Will watch`;
    }

    if (!this._isWatched && !this._willWatch) {
      watchState.innerHTML = ``;
    }
  }

  update(data) {
    this._isFavorite = data.isFavorite;
    this._willWatch = data.willWatch;
    this._isWatched = data.isWatched;

    this.unbind();
    this.updateState();
    this.bind();
  }
}
