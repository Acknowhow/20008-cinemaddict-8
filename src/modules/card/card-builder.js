import {cards, filters} from '../../data';
import {getFiltersState} from '../../assets/handler';

import buildCard from './card-bridge';
import buildFilterContainer from '../filter/container/container-builder';

const body = document.querySelector(`body`);
const main = body.querySelector(`.main`);


export default () => {

  const filterContainer = buildFilterContainer(
    main, getFiltersState(cards, filters));

  filterContainer.onFilter = (target) => {
    console.log(target)
  }

  buildCard(cards);
}
