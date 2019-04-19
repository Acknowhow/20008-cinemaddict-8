import {cards, filters} from '../../data';
import chart from '../../assets/chart';
import {
  getCardsByGenreCounted,
  getCardsByGenre,
  getFiltersState,
  getFilteredCards,
  getWatchedCardsTotalCount,
  getCardsTotalDuration,
  getHoursValue,
  getMinutesValue,
  getCardsTopGenre,
  getCardsByGenreSorted} from '../../assets/handler';

import concreteStatistic from './../statistic/statistic-concreter';
import buildCard from './card-bridge';
import buildFilterContainer from '../filter/container/container-builder';

const body = document.querySelector(`body`);
const main = body.querySelector(`.main`);
const films = main.querySelector(`.films-list`);
const statistic = main.querySelector(`.statistic`);
const statisticFilters = main.querySelector(`.statistic__filters`);
const statisticCtx = main.querySelector(`.statistic__chart`);
const statisticList = main.querySelector(`.statistic__text-list`);

export default () => {

  const filterContainer = buildFilterContainer(
    main, getFiltersState(cards, filters));

  filterContainer.onFilter = (target) => {
    const filteredCards = getFilteredCards(cards, target);

    if (typeof filteredCards !== `string`) {
      if (films.classList.contains(`visually-hidden`)) {
        films.classList.remove(`visually-hidden`);
      }

      if (!statistic.classList.contains(`visually-hidden`)) {
        statistic.classList.add(`visually-hidden`);
        statisticFilters.classList.add(`visually-hidden`);
      }

      filterContainer.update(getFiltersState(cards, filters));
      buildCard(filteredCards);
    } else {
      if (statistic.classList.contains(`visually-hidden`)) {
        statistic.classList.remove(`visually-hidden`);
        statisticFilters.classList.remove(`visually-hidden`);
        films.classList.add(`visually-hidden`);
      }

      const BAR_HEIGHT = 50;
      statisticCtx.height = BAR_HEIGHT * 5;

      const cardsByGenreCounted = getCardsByGenreCounted(getCardsByGenre(cards));

      const {
        genresArray,
        genresCountArray} = getCardsByGenreSorted(cardsByGenreCounted);

      const watchedCardsTotalCount = getWatchedCardsTotalCount(cards);
      const cardsTotalDuration = getCardsTotalDuration(cards);

      const hoursValue = getHoursValue(cardsTotalDuration);
      const minutesValue = getMinutesValue(cardsTotalDuration);

      const cardsTopGenre = getCardsTopGenre(cardsByGenreCounted);


      statisticList.insertAdjacentHTML(`beforeend`, concreteStatistic(
        watchedCardsTotalCount, hoursValue, minutesValue, cardsTopGenre));

      statisticCtx.height = BAR_HEIGHT * genresArray.length;
      chart(statisticCtx, genresArray, genresCountArray);
    }
  };

  buildCard(cards);
}
