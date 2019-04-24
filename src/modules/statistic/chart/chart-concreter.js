import Component from "../../../assets/concreter";

export default class Container extends Component {
  constructor() {
    super();
  }

  get template() {
    return `
      <div class="statistic__chart-wrap">
        <canvas class="statistic__chart" width="1000"></canvas>
      </div>`;
  }
}
