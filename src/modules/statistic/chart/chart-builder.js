import Chart from './chart-concreter';

export default (container) => {
  const chart = new Chart();

  container.appendChild(chart.render());
  return chart;
};
