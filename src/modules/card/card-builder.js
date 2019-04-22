import API from '../../api'
import {loader} from '../../assets/util/';
import {filters} from '../../data';
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
  getCardsByGenreSorted
} from '../../assets/handler';

import concreteStatistic from './../statistic/statistic-concreter';
import bridgeCard from './card-bridge';
import buildFilterContainer from '../filter/container/container-builder';

const body = document.querySelector(`body`);
const main = body.querySelector(`.main`);
const films = main.querySelector(`.films-list`);
const statistic = main.querySelector(`.statistic`);
const statisticFilters = main.querySelector(`.statistic__filters`);
const statisticCtx = main.querySelector(`.statistic__chart`);
const statisticList = main.querySelector(`.statistic__text-list`);

const AUTHORIZATION = `Basic eo0w590ik298895646510=${Math.random()}`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle`;

const Api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});

export default () => {
  const stopLoader = loader();
  Api.getCards()
    .then((loadedCards) => {

      const filterContainer = buildFilterContainer(
        main, getFiltersState(loadedCards, filters));

      filterContainer.onFilter = (target) => {
        const filteredCards = getFilteredCards(loadedCards, target);

        if (typeof filteredCards !== `string`) {

          if (films.classList.contains(`visually-hidden`)) {
            films.classList.remove(`visually-hidden`);
          }

          if (!statistic.classList.contains(`visually-hidden`)) {
            statistic.classList.add(`visually-hidden`);
            statisticFilters.classList.add(`visually-hidden`);
          }
          filterContainer.update(getFiltersState(loadedCards, filters));

          bridgeCard(filteredCards, Api);
        } else {

          statisticList.innerHTML = ``;
          if (statistic.classList.contains(`visually-hidden`)) {
            statistic.classList.remove(`visually-hidden`);
            statisticFilters.classList.remove(`visually-hidden`);
            films.classList.add(`visually-hidden`);
          }


          const cardsByGenreCounted = getCardsByGenreCounted(getCardsByGenre(loadedCards));

          const {
            genresArray,
            genresCountArray
          } = getCardsByGenreSorted(cardsByGenreCounted);

          const watchedCardsTotalCount = getWatchedCardsTotalCount(loadedCards);
          const cardsTotalDuration = getCardsTotalDuration(loadedCards);

          const hoursValue = getHoursValue(cardsTotalDuration);
          const minutesValue = getMinutesValue(cardsTotalDuration);

          const cardsTopGenre = getCardsTopGenre(cardsByGenreCounted);


          statisticList.insertAdjacentHTML(`beforeend`, concreteStatistic(
            watchedCardsTotalCount, hoursValue, minutesValue, cardsTopGenre));

          chart(statisticCtx, genresArray, genresCountArray);
        }
      };

      bridgeCard(loadedCards, Api);
    })
    .then(stopLoader);
};
