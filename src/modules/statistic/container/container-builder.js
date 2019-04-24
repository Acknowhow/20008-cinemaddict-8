import Statistic from './container-concreter';

export default (container) => {
  const statistic = new Statistic();

  container.insertAdjacentElement(`afterend`, statistic.render());

  return statistic;
};
