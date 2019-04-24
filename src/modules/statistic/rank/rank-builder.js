import Rank from './rank-concreter';

export default (container, data) => {
  const rank = new Rank(data);

  container.appendChild(rank.render());

  return rank;
};
