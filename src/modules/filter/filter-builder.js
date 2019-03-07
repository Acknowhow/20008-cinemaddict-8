import {filters} from './../../data';
import concreteFilter from './../../modules/filter/filter-concreter';

const nav = document.querySelector(`.main-navigation`);

export default () => {
  for (const it of filters) {
    nav.insertAdjacentHTML(`beforeEnd`, concreteFilter(
        {caption: it.name, amount: it.amount, state: it.state}));
  }
};
