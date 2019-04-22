import Component from '../../../assets/concreter';

export default class Rating extends Component {
  constructor(rating, ratings) {
    super();

    this._rating = rating;
    this._ratings = ratings;
  }

  _partialUpdate() {
    this._element.innnerHTML = this.template;
  }

  _getRatings() {
    return this._ratings.map((it) =>`
      <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" 
      value="${it}" id="rating-${it}" ${parseInt(it, 10) === this._rating ? `checked` : ``}">
      <label class="film-details__user-rating-label" for="rating-${it}">${it}</label>`
    );
  }

  get template() {
    return `<div>${this._getRatings().join(``)}</div>`;
  }

  update(data) {
    this._rating = data.rating;
    this._partialUpdate();
  }
}
