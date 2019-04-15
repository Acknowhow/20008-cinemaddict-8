import {card, filters} from '../../data';

import CardContainer from './container/container-concreter';
import PopupContainer from './../popup/container/container-concreter';

import buildMain from './main/main-builder';
import buildFilter from './../filter/filter-builder';

import buildInfo from './../popup/info/info-builder';
import buildComment from './../popup/comment/comment-builder';
import buildRating from './../popup/rating/rating-builder.js';

import {getRandomArrayElement} from '../../assets/handler';
import {manufacture} from '../../assets/factory';

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
      let main;
      let producedPopupBuilders = [];

      const {comments, titles, images} = card;

      const src = getRandomArrayElement(images);
      const title = getRandomArrayElement(titles);

      const cardContainer = new CardContainer(comments);
      const popupContainer = new PopupContainer(src, title);

      const formSubmission = (evt) => {
        if (evt.ctrlKey === true && evt.keyCode === 13) {

          popupContainer.onSubmit = (newData) => {

            card.comments.push(newData);

            cardContainer.update(card)

            body.removeEventListener('keydown', formSubmission);
            body.removeChild(popupContainer.element);

            popupContainer.unrender();
          }
        }
      };

      const popupBuilders = [
        buildInfo, buildComment, buildRating
      ];

      cardsContainer.appendChild(cardContainer.render());

      main = buildMain(card, cardContainer.element);

      cardContainer.onComments = () => {
        popupContainer.render();

        producedPopupBuilders = manufacture(
          card, popupContainer.element, ...popupBuilders);

        body.appendChild(popupContainer.element);
        body.addEventListener('keydown', formSubmission);

        cardContainer.unbind();
      };

      popupContainer.onClose = () => {
        cardContainer.bind();

        body.removeEventListener('keydown', formSubmission);
        body.removeChild(popupContainer.element);
        popupContainer.unrender();
      };
    }
  });
};
