import {card, filters} from '../../data';

import ConcreteContainer from './container/container-concreter';
import buildMain from './main/main-builder';

import buildFilter from './../filter/filter-builder';

const cardsContainer = document.querySelector(
    `.films-list__container--main`);

const filtersContainer = document.querySelector(
  `.main-navigation`);

export default () => {
  buildFilter(filters, filtersContainer);

  filtersContainer.addEventListener(`click`, (e) => {
    const {target} = e;

    if (target.tagName.toUpperCase() === `A`) {
      const {ratings} = card;

      const container = new ConcreteContainer(ratings);

      const getContainer = () => cardsContainer.appendChild(container.render());

      buildMain(card, getContainer());

    }
  });
};
