import Component from '../../../assets/concreter';
import {Filter} from '../../../data';
import {invert} from '../../../assets/handler';

export default class Container extends Component {
  constructor(filters) {
    super();

    this._filters = filters;
    this._onFilter = null;
    this._onFilterButtonClick = this._onFilterButtonClick.bind(this);
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  get template() {
    return `<nav class="main-navigation">${this._getFilters().join(``)}</nav>`;
  }

  updateState(target) {
    const invertFilter = invert(Filter);

    const currentFilter = this._element.querySelector(`a[href='${invertFilter[target]}']`);
    const filters = this._element.querySelectorAll(`.main-navigation__item`);

    for (const filter of filters) {
      if (filter.classList.contains(`main-navigation__item--active`)) {
        filter.classList.remove(`main-navigation__item--active`);
      }
    }
    currentFilter.classList.add(`main-navigation__item--active`);
  }

  update(filters) {
    this._filters = filters;

    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _partialUpdate() {
    this._element.innerHTML = this.template;

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
        class="main-navigation__item ${state ? `main-navigation__item&#45;&#45;${state}` : `main-navigation__item`}">
        ${captionFirstLetterToUpperCase} ${amount ? `<span class="main-navigation__item-count">${amount}</span>` : ``}
        </a>`;
    });
  }

  bind() {
    this._element.addEventListener(`click`, this._onFilterButtonClick);
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onFilterButtonClick);
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
}
