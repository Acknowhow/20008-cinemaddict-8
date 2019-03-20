import ConcreteContainer from './container-concreter';
export default (card) => {
  const {ratings} = card;

  return new ConcreteContainer(ratings);
};
