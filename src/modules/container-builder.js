import API from './../api';
import {loader} from './../assets/util/';
import {filters} from './../data';
import chart from './../assets/chart';
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
  getCardsByGenreSorted,
  getSlicedArray, getProfile
} from './../assets/handler';

import buildCard from './card/card-builder';
import buildSearch from './search/search-builder';
import buildShow from './show/show-builder';
import buildFilterContainer from './filter/container/container-builder';
import buildProfile from './profile/profile-builder';

import buildStatisticContainer from './statistic/container/container-builder';
import buildRank from './statistic/rank/rank-builder';

const body = document.querySelector(`body`);
const searchContainer = body.querySelector(`.header__search`);
const profileContainer = body.querySelector(`.header__profile`);

const main = body.querySelector(`.main`);
const films = main.querySelector(`.films-list`);


const statisticFilters = main.querySelector(`.statistic__filters`);
const statisticCtx = main.querySelector(`.statistic__chart`);
const statisticList = main.querySelector(`.statistic__text-list`);

const AUTHORIZATION = `Basic eo0w590ik298895646510=${Math.random()}`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle`;

const Api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});

export default () => {
  const CARDS_SLICE_INDEX = 0;
  let currentTarget = ``;
  let cardsToDisplayCount = 5;
  let cardsTotal = [];
  let cardsToDisplay = [];

  const stopLoader = loader();
  Api.getCards()
    .then((loadedCards) => {

      const search = buildSearch(searchContainer);
      const show = buildShow(films);
      const profileState = getProfile(loadedCards);

      buildProfile(profileState, profileContainer);

      const statisticContainer = buildStatisticContainer(films);

      show.onShow = () => {
        cardsToDisplayCount += 5;

        cardsToDisplay = getSlicedArray(
            [...cardsTotal], CARDS_SLICE_INDEX, cardsToDisplayCount);

        show.checkState(cardsTotal, cardsToDisplayCount);
        buildCard(cardsToDisplay, cardsTotal, Api);
      };

      search.onInput = (target) => {
        const inputValue = target.value.toUpperCase();


        const searchedCards = loadedCards.filter((it) => {
          return it.title.toUpperCase().indexOf(inputValue) !== -1;
        });

        buildCard(searchedCards, cardsTotal, Api);
      };

      const filterContainer = buildFilterContainer(
          main, getFiltersState(loadedCards, filters));

      filterContainer.onFilter = (target) => {
        currentTarget = target;

        const filteredCards = getFilteredCards(loadedCards, currentTarget);

        if (typeof filteredCards !== `string`) {

          if (films.classList.contains(`visually-hidden`)) {
            films.classList.remove(`visually-hidden`);
          }

          if (!statisticContainer.element.classList.contains(`visually-hidden`)) {
            statisticContainer.element.classList.add(`visually-hidden`);
            // statisticFilters.classList.add(`visually-hidden`);
          }
          filterContainer.update(getFiltersState(loadedCards, filters));
          filterContainer.updateState(currentTarget);

          cardsTotal = filteredCards;

          cardsToDisplay = getSlicedArray(
              [...cardsTotal], CARDS_SLICE_INDEX, cardsToDisplayCount);

          show.checkState(cardsTotal, cardsToDisplayCount);

          buildCard(cardsToDisplay, cardsTotal, Api);
        } else {

          // statisticList.innerHTML = ``;
          if (statisticContainer.element.classList.contains(`visually-hidden`)) {
            statisticContainer.element.classList.remove(`visually-hidden`);

            // statisticFilters.classList.remove(`visually-hidden`);
            films.classList.add(`visually-hidden`);
          }

          const cardsByGenreCounted = getCardsByGenreCounted(
              getCardsByGenre(loadedCards));

          // const {
          //   genresArray,
          //   genresCountArray
          // } = getCardsByGenreSorted(cardsByGenreCounted);
          //
          // const watchedCardsTotalCount = getWatchedCardsTotalCount(loadedCards);
          // const cardsTotalDuration = getCardsTotalDuration(loadedCards);
          //
          // const hoursValue = getHoursValue(cardsTotalDuration);
          // const minutesValue = getMinutesValue(cardsTotalDuration);
          //
          const cardsTopGenre = getCardsTopGenre(cardsByGenreCounted);

          const rank = buildRank(statisticContainer.element, cardsTopGenre);

          // statisticList.insertAdjacentHTML(`beforeend`, concreteStatistic(
          //     watchedCardsTotalCount, hoursValue, minutesValue, cardsTopGenre));
          //
          // chart(statisticCtx, genresArray, genresCountArray);
        }
      };
      cardsTotal = loadedCards;
      cardsToDisplayCount = 5;
      currentTarget = `all`;
      cardsToDisplay = getSlicedArray(
          [...cardsTotal], CARDS_SLICE_INDEX, cardsToDisplayCount);

      buildCard(cardsToDisplay, cardsTotal, Api);
    })
    .then(stopLoader);
};
