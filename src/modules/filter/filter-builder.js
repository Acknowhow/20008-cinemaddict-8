import concreteFilter from './../../modules/filter/filter-concreter';

export default (filters, container) => {
  for (const it of filters) {
    container.insertAdjacentHTML(`beforeend`, concreteFilter(
        {caption: it.name, amount: it.amount, state: it.state}));
  }
};
