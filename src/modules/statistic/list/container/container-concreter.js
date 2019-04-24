import Component from '../../../../assets/concreter';

export default class Container extends Component {
  constructor(data) {
    super();

    this._totalCount = data.totalCount;
    this._hoursDuration = data.hoursDuration;
    this._minutesDuration = data.minutesDuration;
    this._genre = data.genre;
  }


  get template() {
    return `
      <div>
        <ul class="statistic__text-list">
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">You watched</h4>
            <p class="statistic__item-text statistic__item-text--total">${this._totalCount} <span class="statistic__item-description">movies</span></p>
          </li>
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">Total duration</h4>
            <p class="statistic__item-text">${this._hoursDuration} <span class="statistic__item-description">h</span> ${this._minutesDuration} <span class="statistic__item-description">m</span></p>
          </li>
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">Top genre</h4>
            <p class="statistic__item-text">${this._getGenreToUpperCase()}</p>
          </li>
        </ul>
      </div>`;
  }

  update(data) {
    this._totalCount = data.totalCount;
    this._hoursDuration = data.hoursDuration;
    this._minutesDuration = data.minutesDuration;
    this._genre = data.genre;

    this._partialUpdate();
  }

  _partialUpdate() {
    this._element.innerHTML = this.template;
  }

  _getGenreToUpperCase() {
    return this._genre.charAt(0).toUpperCase() + this._genre.slice(1);
  }
}
