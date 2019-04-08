import {card, filters} from '../../data';

import CardContainer from './container/container-concreter';
import PopupContainer from './../popup/container/container-concreter';

import buildMain from './main/main-builder';
import buildFilter from './../filter/filter-builder';

import buildInfo from './../popup/info/info-builder';
import buildComment from './../popup/comment/comment-builder';
import buildRating from './../popup/rating/rating-builder.js';

import {getRandomArrayElement} from '../../assets/handler';
import {manufacture} from "../../assets/factory";

const body = document.querySelector(`body`);
const cardsContainer = body.querySelector(
    `.films-list__container--main`);

const filtersContainer = body.querySelector(
    `.main-navigation`);

export default () => {
  buildFilter(filters, filtersContainer);

  filtersContainer.addEventListener(`click`, (e) => {
    const {target} = e;

    if (target.tagName.toUpperCase() === `A`) {
      const {ratings, titles, images} = card;

      const src = getRandomArrayElement(images);
      const title = getRandomArrayElement(titles);

      const cardContainer = new CardContainer(ratings);
      const popupContainer = new PopupContainer(src, title);

      const popupBuilders = [
        buildInfo, buildComment, buildRating
      ];

      cardsContainer.appendChild(cardContainer.render());

      buildMain(card, cardContainer.element);

      cardContainer.onComments = () => {
        popupContainer.render();

        manufacture(card, popupContainer.element, ...popupBuilders);

        body.appendChild(popupContainer.element);
        cardContainer.unbind();
      };

      popupContainer.onClose = () => {
        cardContainer.bind();

        body.removeChild(popupContainer.element);
        popupContainer.unrender();
      };
    }
  });
};
