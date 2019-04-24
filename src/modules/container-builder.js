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
  getSlicedArray, getProfile, getFilteredStats
} from './../assets/handler';

import buildCard from './card/card-builder';
import buildSearch from './search/search-builder';
import buildShow from './show/show-builder';
import buildFilterContainer from './filter/container/container-builder';
import buildProfile from './profile/profile-builder';

import buildStatisticContainer from './statistic/container/container-builder';
import buildStatisticRank from './statistic/rank/rank-builder';
import buildStatisticFilter from './statistic/filter/container/container-builder';
import buildStatisticList from './statistic/list/container/container-builder';
import buildStatisticChart from './statistic/chart/chart-builder';

const body = document.querySelector(`body`);
const searchContainer = body.querySelector(`.header__search`);
const profileContainer = body.querySelector(`.header__profile`);

const main = body.querySelector(`.main`);
const films = main.querySelector(`.films-list`);


const AUTHORIZATION = `Basic eo0w590ik298895646510=}`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle`;

const Api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});

export default () => {
  const CARDS_SLICE_INDEX = 0;
  let currentTarget = ``;
  let cardsToDisplayCount = 5;

  let cardsTotal = [];
  let cardsFilteredTotal = [];
  let cardsToDisplay = [];

  let cardsStatisticTotal = [];
  let cardsCount = [];

  let cardsTotalDuration = [];
  let hoursDuration = ``;
  let minutesDuration = ``;

  const stopLoader = loader();
  Api.getCards()
    .then((loadedCards) => {

      cardsTotal = loadedCards;


      const search = buildSearch(searchContainer);
      const show = buildShow(films);


      cardsStatisticTotal = cardsTotal;
      let profileState = getProfile(cardsStatisticTotal);

      let cardsByGenreCounted = getCardsByGenreCounted(
          getCardsByGenre(cardsStatisticTotal));

      let {
        genresArray,
        genresCountArray
      } = getCardsByGenreSorted(cardsByGenreCounted);

      cardsCount = getWatchedCardsTotalCount(cardsStatisticTotal);

      cardsTotalDuration = getCardsTotalDuration(cardsStatisticTotal);

      hoursDuration = getHoursValue(cardsTotalDuration);
      minutesDuration = getMinutesValue(cardsTotalDuration);


      buildProfile(profileState, profileContainer);
      const statisticContainer = buildStatisticContainer(films);

      const filterContainer = buildFilterContainer(
          main, getFiltersState(cardsTotal, filters));


      let cardsTopGenre = getCardsTopGenre(cardsByGenreCounted);

      const rank = buildStatisticRank(statisticContainer.element,
          cardsTopGenre);

      const statisticFilter = buildStatisticFilter(statisticContainer.element,
          statisticFilters);

      const statisticList = buildStatisticList(statisticContainer.element,
          {totalCount: cardsCount, hoursDuration, minutesDuration,
            genre: cardsTopGenre});

      const statisticChart = buildStatisticChart(statisticContainer.element);
      const statisticCanvas = statisticChart.element.querySelector(`.statistic__chart`);
      statisticCanvas.style.pointerEvents = `none`;

      chart(statisticCanvas, genresArray, genresCountArray);

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

      filterContainer.onFilter = (filterTarget) => {
        currentTarget = filterTarget;

        const filteredCards = getFilteredCards(cardsTotal, currentTarget);

        if (filteredCards !== `stats`) {
          statisticFilter.unbind();

          if (films.classList.contains(`visually-hidden`)) {
            films.classList.remove(`visually-hidden`);
          }

          if (!statisticContainer.element.classList.contains(`visually-hidden`)) {
            statisticContainer.element.classList.add(`visually-hidden`);

          }
          filterContainer.update(getFiltersState(loadedCards, filters));
          filterContainer.updateState(currentTarget);

          cardsFilteredTotal = filteredCards;

          cardsToDisplay = getSlicedArray(
              [...cardsFilteredTotal], CARDS_SLICE_INDEX, cardsToDisplayCount);

          show.checkState(cardsFilteredTotal, cardsToDisplayCount);

          buildCard(cardsToDisplay, cardsTotal, Api);
        } else {
          statisticFilter.bind();

          statisticFilter.onFilter = (statisticFilterTarget) => {

            cardsStatisticTotal = getFilteredStats(cardsTotal, statisticFilterTarget);

            cardsCount = getWatchedCardsTotalCount(cardsStatisticTotal);
            cardsTotalDuration = getCardsTotalDuration(cardsStatisticTotal);

            hoursDuration = getHoursValue(cardsTotalDuration);
            minutesDuration = getMinutesValue(cardsTotalDuration);

            cardsByGenreCounted = getCardsByGenreCounted(
                getCardsByGenre(cardsStatisticTotal));

            let {
              genresArray: genresTargetArray,
              genresCountArray: genresCountTargetArray} = getCardsByGenreSorted(cardsByGenreCounted);

            cardsTopGenre = getCardsTopGenre(cardsByGenreCounted);

            rank.update(cardsTopGenre);
            statisticList.update({totalCount: cardsCount, hoursDuration, minutesDuration,
              genre: cardsTopGenre});

            statisticFilter.updateState(statisticFilterTarget);
            chart(statisticCanvas, genresTargetArray, genresCountTargetArray);

          };

          if (statisticContainer.element.classList.contains(`visually-hidden`)) {
            statisticContainer.element.classList.remove(`visually-hidden`);

            films.classList.add(`visually-hidden`);
          }
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
