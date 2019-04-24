import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="statistic visually-hidden"></section>`;
  }
}
