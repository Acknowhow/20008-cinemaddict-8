import Component from '../../../../assets/concreter';
import {StatisticFilter} from '../../../../data';

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
    return `
     <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
        <p class="statistic__filters-description">Show stats:</p>
        ${this._getFilters().join(``)}
     </form>`;
  }

  updateState(target) {

    const currentFilterInput = this._element.querySelector(`#statistic-${target}`);
    const filterInputs = this._element.querySelectorAll(`.statistic__filters-input`);

    for (const input of filterInputs) {
      if (input.hasAttribute(`checked`)) {
        input.removeAttribute(`checked`);
      }
    }

    currentFilterInput.setAttribute(`checked`, `checked`);
  }


  _getFilters() {
    return this._filters.map((it) => {

      const caption = it.name;

      const captionToLowerCase = caption.toLowerCase();
      const captionFirstLetterToUpperCase =
        caption.charAt(0).toUpperCase() + caption.slice(1);

      captionFirstLetterToUpperCase.replace(/-/g, ` `);

      const state = it.state;

      return `<input type="radio" 
                     class="statistic__filters-input visually-hidden" 
                     name="statistic-filter" id="statistic-${captionToLowerCase}" value="${captionToLowerCase}" ${state ? `checked` : ``}>
              <label for="statistic-${captionToLowerCase}" class="statistic__filters-label">${captionFirstLetterToUpperCase}</label>`;
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
      target.tagName.toUpperCase() === `LABEL`) {

      const filterValue = target.attributes[`for`].nodeValue;
      this._onFilter(StatisticFilter[filterValue]);
    }
  }
}
