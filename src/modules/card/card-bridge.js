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
      let randomNumber;
      let cardsNumber = 6;

      randomNumber = getRandomIntInclusive(0, cardsNumber);
      cardsContainer.innerHTML = ``;

      while (randomNumber >= 0) {
        const cardContainer = buildContainer(cardsContainer, randomNumber);

        buildIntro(cardContainer, titles, ratings,
          releaseTimestamps, durations, genres);

        buildMain(cardContainer, images, descriptions);
        buildControl(cardContainer);

        randomNumber--;
      }

      const cardContainerRated = buildContainer(cardsContainerRated, 0);

      buildIntro(cardContainerRated, titles, ratings,
        releaseTimestamps, durations, genres);
      buildMain(cardContainerRated, images, descriptions);
      buildControl(cardContainerRated);

      const cardContainerCommented = buildContainer(cardsContainerCommented, 0);

      buildIntro(cardContainerCommented, titles, ratings,
        releaseTimestamps, durations, genres);
      buildMain(cardContainerCommented, images, descriptions);
      buildControl(cardContainerCommented);

    }
  });


}
