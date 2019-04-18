import Component from '../../../assets/concreter';
import {Filter} from '../../../data';

export default class Container extends Component {
  constructor(filters) {
    super();

    this._filters = filters;

    this._onFilter = null;
    this._onFilterButtonClick = this._onFilterButtonClick.bind(this);
  }

  _onFilterButtonClick(e) {
    e.preventDefault();

    const {target} = e;

    if (typeof this._onFilter === `function` &&
      target.tagName.toUpperCase() === `A`) {

      const filterValue = target.attributes[`href`].nodeValue;
      this._onFilter(Filter[filterValue]);

    }
  }

  _partialUpdate() {

  }

  _getFilters() {
    return this._filters.map((it) => {
      const caption = it.name;
      const captionToLowerCase = caption.toLowerCase();
      const captionFirstLetterToUpperCase =
        caption.charAt(0).toUpperCase() + caption.slice(1);

      const amount = it.count;
      const state = it.state;

      return `
        <a href="#${captionToLowerCase}"
        class="main-navigation__item main-navigation__item${state ? `&#45;&#45;${state}` : ``}">
        ${captionFirstLetterToUpperCase} ${amount ? `<span class="main-navigation__item-count">${amount}</span>` : ``}
        </a>`;
    });
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  get template() {
    return `<nav class="main-navigation">${this._getFilters().join(``)}</nav>`;
  }

  bind() {
    this._element.addEventListener(`click`, this._onFilterButtonClick);
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onFilterButtonClick);
  }

  update() {

  }
}
