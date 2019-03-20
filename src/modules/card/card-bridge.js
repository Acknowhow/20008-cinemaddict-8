import {card, filters} from '../../data';
import {getRandomIntInclusive} from '../../assets/handler';

import buildContainer from './container/container-builder';
import buildIntro from './intro/intro-builder';
import buildMain from './main/main-builder';
import buildControl from './control/control-builder';

import buildFilter from './../filter/filter-builder';

const {
  titles, ratings, releaseTimestamps,
  durations, genres, images, descriptions
} = card;

const cardsContainer = document.querySelector(
  `.films-list__container--main`);

const cardsContainerRated = document.querySelector(
  `.films-list__container--rated`);

const cardsContainerCommented = document.querySelector(
  `.films-list__container--commented`);

const filtersContainer = document.querySelector(
  `.main-navigation`)

export default () => {
  buildFilter(filters, filtersContainer);

  filtersContainer.addEventListener(`click`, (e) => {

    const {target} = e;

    if (target.tagName.toUpperCase() === `A`) {

      cardsContainer.innerHTML = ``;

      const cardContainer = buildContainer(cardsContainer);

      buildIntro(cardContainer, titles, ratings,
        releaseTimestamps, durations, genres);

      buildMain(cardContainer, images, descriptions);
      buildControl(cardContainer);
    }
  });


}
