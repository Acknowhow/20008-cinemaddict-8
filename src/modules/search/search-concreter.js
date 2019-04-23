import Component from '../../assets/concreter';
import {Filter} from "../../data";

export default class Container extends Component {
  constructor() {
    super();

    this._onInput = null;
    this._onInputKeyUp = this._onInputKeyUp.bind(this);
  }

  _onInputKeyUp(e) {

    const {target} = e;

    if (typeof this._onInput === `function`) {
      this._onInput(target);
    }
  }

  set onInput(fn) {
    this._onInput = fn;
  }

  get template() {
    return `
      <div>
        <input type="text" name="search" class="search__field" placeholder="Search">
        <button type="submit" class="visually-hidden">Search</button>
      </div>`;
  }

  bind() {
    this._element.querySelector(`.search__field`)
      .addEventListener(`keyup`, this._onInputKeyUp);
  }

  unbind() {
    this._element.querySelector(`.search__field`)
      .removeEventListener(`keydown`, this._onInputKeyUp);
  }
}
