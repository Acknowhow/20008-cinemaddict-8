export default class Container {
  constructor(ratings) {
    this.ratings = ratings;

    this._element = null;
    this._onComments = null;

    this._onCommentsButtonClick = this._onCommentsButtonClick.bind(this);

  }

  _onCommentsButtonClick(e) {
    e.preventDefault();

    if (typeof this._onComments === `function`) {
      this._onComments();
    }
  }

  get element() {
    return this._element;
  }

  set onComments(fn) {
    this._onComments = fn;
  }


  get template() {
    return `<article class="film-card film-card">

          <button class="film-card__comments">${this.ratings.length} comments</button>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
          </article>`;
  }

  bind() {
    this._element.querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._onCommentsButtonClick);

  }

  render() {
    const elementContainer = document.createElement(`div`);
    elementContainer.insertAdjacentHTML(`beforeend`, this.template);

    this._element = elementContainer.querySelector(`.film-card`);
    this.bind();
    return this._element;
  }

  unbind() {
    this._element.querySelector(`.film-card__comments`)
      .removeEventListener(`click`, this._onCommentsButtonClick);
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}
