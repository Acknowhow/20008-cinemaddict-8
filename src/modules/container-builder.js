import API from './../api';
import {loader} from './../assets/util/';
import {filters, statisticFilters} from './../data';
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
import buildStatisticRank from './statistic/rank/rank-builder';
import buildStatisticFilter from './statistic/filter/container/container-builder';

const body = document.querySelector(`body`);
const searchContainer = body.querySelector(`.header__search`);
const profileContainer = body.querySelector(`.header__profile`);

const main = body.querySelector(`.main`);
const films = main.querySelector(`.films-list`);


// const statisticFilters = main.querySelector(`.statistic__filters`);
// const statisticCtx = main.querySelector(`.statistic__chart`);
// const statisticList = main.querySelector(`.statistic__text-list`);

const AUTHORIZATION = `Basic eo0w590ik298895646510=${Math.random()}`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle`;

const Api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});

export default () => {
  const CARDS_SLICE_INDEX = 0;
  let currentTarget = ``;
  let cardsToDisplayCount = 5;

  let cardsTotal = [];
  let cardsFilteredTotal = [];
  let cardsToDisplay = [];

  const stopLoader = loader();
  Api.getCards()
    .then((loadedCards) => {

      cardsTotal = loadedCards;

      const search = buildSearch(searchContainer);
      const show = buildShow(films);
      const profileState = getProfile(cardsTotal);

      buildProfile(profileState, profileContainer);

      const statisticContainer = buildStatisticContainer(films);

      const filterContainer = buildFilterContainer(
        main, getFiltersState(cardsTotal, filters));

      const cardsByGenreCounted = getCardsByGenreCounted(
        getCardsByGenre(cardsTotal));

      const cardsTopGenre = getCardsTopGenre(cardsByGenreCounted);
      const statisticRank = buildStatisticRank(statisticContainer.element, cardsTopGenre);
      const statisticFilter = buildStatisticFilter(statisticContainer.element, statisticFilters);


      show.onShow = () => {
        cardsToDisplayCount += 5;

        cardsToDisplay = getSlicedArray(
            [...cardsFilteredTotal], CARDS_SLICE_INDEX, cardsToDisplayCount);

        show.checkState(cardsFilteredTotal, cardsToDisplayCount);
        buildCard(cardsToDisplay, cardsFilteredTotal, Api);
      };

      search.onInput = (target) => {
        const inputValue = target.value.toUpperCase();


        const searchedCards = cardsTotal.filter((it) => {
          return it.title.toUpperCase().indexOf(inputValue) !== -1;
        });

        buildCard(searchedCards, cardsTotal, Api);
      };

      filterContainer.onFilter = (target) => {
        currentTarget = target;

        const filteredCards = getFilteredCards(cardsTotal, currentTarget);

        if (filteredCards !== `stats`) {
          statisticRank.unbind();
          statisticFilter.unbind();

          if (films.classList.contains(`visually-hidden`)) {
            films.classList.remove(`visually-hidden`);
          }

          if (!statisticContainer.element.classList.contains(`visually-hidden`)) {
            statisticContainer.element.classList.add(`visually-hidden`);
            // statisticFilters.classList.add(`visually-hidden`);
          }
          filterContainer.update(getFiltersState(loadedCards, filters));
          filterContainer.updateState(currentTarget);

          cardsFilteredTotal = filteredCards;

          cardsToDisplay = getSlicedArray(
              [...cardsFilteredTotal], CARDS_SLICE_INDEX, cardsToDisplayCount);

          show.checkState(cardsFilteredTotal, cardsToDisplayCount);

          buildCard(cardsToDisplay, cardsTotal, Api);
        } else {

          statisticRank.bind();
          statisticFilter.bind();
          // statisticList.innerHTML = ``;
          if (statisticContainer.element.classList.contains(`visually-hidden`)) {
            statisticContainer.element.classList.remove(`visually-hidden`);

            // statisticFilters.classList.remove(`visually-hidden`);
            films.classList.add(`visually-hidden`);
          }



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

          // statisticList.insertAdjacentHTML(`beforeend`, concreteStatistic(
          //     watchedCardsTotalCount, hoursValue, minutesValue, cardsTopGenre));
          //
          // chart(statisticCtx, genresArray, genresCountArray);
        }
      };
      cardsFilteredTotal = cardsTotal;
      cardsToDisplayCount = 5;
      currentTarget = `all`;
      cardsToDisplay = getSlicedArray(
          [...cardsFilteredTotal], CARDS_SLICE_INDEX, cardsToDisplayCount);

      buildCard(cardsToDisplay, cardsTotal, Api);
    })
    .then(stopLoader);
};
