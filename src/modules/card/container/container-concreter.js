import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor(comments) {
    super();
    this._comments = comments;
    this._onComments = null;

    this._onWillWatch = null;
    this._onWatched = null;
    this._onFavorite = null;

    this._onCommentsButtonClick = this._onCommentsButtonClick.bind(this);
    this._onWillWatchButtonClick = this._onWillWatchButtonClick.bind(this);
    this._onWatchedButtonClick = this._onWatchedButtonClick.bind(this);
    this._onFavoriteButtonClick = this._onFavoriteButtonClick.bind(this);
  }

  set onComments(fn) {
    this._onComments = fn;
  }

  set onWillWatch(fn) {
    this._onWillWatch = fn;
  }

  set onWatched(fn) {
    this._onWatched = fn;
  }

  set onFavorite(fn) {
    this._onFavorite = fn;
  }

  get template() {
    return `<article class="film-card film-card">

          <button class="film-card__comments">${this._comments.length} comments</button>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
          </article>`;
  }

  update(data) {
    this._comments = data.comments;

    this._partialUpdate();
    this.bind();
  }

  _partialUpdate() {
    this._element.querySelector(`.film-card__comments`).innerHTML =
      `${this._comments.length} comments`;
  }

  bind() {
    this._element.querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._onCommentsButtonClick);

    this._element.querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, this._onWillWatchButtonClick);

    this._element.querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, this._onWatchedButtonClick);

    this._element.querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, this._onFavoriteButtonClick);

  }

  unbind() {
    this._element.querySelector(`.film-card__comments`)
      .removeEventListener(`click`, this._onCommentsButtonClick);

    this._element.querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, this._onWillWatchButtonClick);

    this._element.querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, this._onWatchedButtonClick);

    this._element.querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, this._onFavoriteButtonClick);
  }

  _onCommentsButtonClick(e) {
    e.preventDefault();

    if (typeof this._onComments === `function`) {
      this._onComments();
    }
  }

  _onWillWatchButtonClick(e) {
    e.preventDefault();

    if (typeof this._onWillWatch === `function`) {

      this._onWillWatch(`add-to-watchlist`);
    }

  }

  _onWatchedButtonClick(e) {

    e.preventDefault();

    if (typeof this._onWatched === `function`) {


      this._onWatched(`mark-as-watched`);
    }

  }

  _onFavoriteButtonClick(e) {

    e.preventDefault();

    if (typeof this._onWatched === `function`) {

      this._onWatched(`favorite`);
    }
  }
}
