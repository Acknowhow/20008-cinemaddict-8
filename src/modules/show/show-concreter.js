import Component from '../../assets/concreter';

export default class Container extends Component {
  constructor() {
    super();

    this._onShow = null;
    this._onShowButtonClick = this._onShowButtonClick.bind(this);
  }

  _onShowButtonClick(e) {
    e.stopPropagation();

    if (typeof this._onShow === `function`) {
      this._onShow();
    }
  }

  set onShow(fn) {
    this._onShow = fn;
  }

  get template() {
    return `<button class="films-list__show-more">Show more</button>`;
  }

  bind() {
    this._element.addEventListener(`click`, this._onShowButtonClick);
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onShowButtonClick);
  }

  checkState(cards, index) {
    if (cards.length <= index) {
      this._element.classList.add(`visually-hidden`);
    }

    if (cards.length > index) {
      if (this._element.classList.contains(`visually-hidden`)) {
        this._element.classList.remove(`visually-hidden`);
      }
    }
  }
}
