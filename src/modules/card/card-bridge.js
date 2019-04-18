// import moment from 'moment';
// import momentDurationFormat from 'moment-duration-format/lib/moment-duration-format';

import CardContainer from './container/container-concreter';
import PopupContainer from './../popup/container/container-concreter';

import buildMain from './main/main-builder';

import buildInfo from './../popup/info/info-builder';
import buildComment from './../popup/comment/comment-builder';
import buildRating from './../popup/rating/rating-builder.js';

import {manufacture} from '../../assets/factory';

const body = document.querySelector(`body`);
const cardsContainer = body.querySelector(
    `.films-list__container--main`);


export default (cards) => {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    let main;
    let producedPopupBuilders = [];

    const {
      comments, title, image,
      isFavorite, isWatched, willWatch} = card;

    const cardContainer = new CardContainer(comments);
    const popupContainer = new PopupContainer(
      {image, title, isFavorite, isWatched, willWatch});

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

    popupContainer.onAddToWatchList = (target) => {
      console.log(target)

    };

    popupContainer.onClose = () => {
      cardContainer.bind();

      body.removeEventListener('keydown', formSubmission);
      body.removeChild(popupContainer.element);
      popupContainer.unrender();
    };
  }
}











