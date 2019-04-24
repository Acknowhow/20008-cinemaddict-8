import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor(comments) {
    super();
    this._comments = comments;
    this._onComments = null;

    this._onCommentsButtonClick = this._onCommentsButtonClick.bind(this);
  }

  set onComments(fn) {
    this._onComments = fn;
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

  }

  unbind() {
    this._element.querySelector(`.film-card__comments`)
      .removeEventListener(`click`, this._onCommentsButtonClick);
  }

  _onCommentsButtonClick(e) {
    e.preventDefault();

    if (typeof this._onComments === `function`) {
      this._onComments();
    }
  }
}
