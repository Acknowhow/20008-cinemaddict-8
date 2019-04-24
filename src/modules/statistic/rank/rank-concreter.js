import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor(rank) {
    super();

    this._rank = rank;
  }

  get template() {
    return `
      <p class="statistic__rank">Your rank <span class="statistic__rank-label">${this._rank}</span></p>`;
  }

  update(data) {
    this._rank = data;
    this._partialUpdate();
  }

  _partialUpdate() {
    this._element.querySelector(`.statistic__rank-label`).innerHTML = this._rank;
  }
}
