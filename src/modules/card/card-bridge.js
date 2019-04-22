import CardContainer from './container/container-concreter';
import PopupContainer from './../popup/container/container-concreter';

import buildMain from './main/main-builder';
import buildInfo from './../popup/info/info-builder';
import buildComment from './../popup/comment/comment-builder';
import buildRating from './../popup/rating/rating-builder.js';

import {manufacture} from '../../assets/factory';
import {loader, block, unblock, load} from '../../assets/util/';

const body = document.querySelector(`body`);
const cardsContainer = body.querySelector(
    `.films-list__container--main`);

export default (cards, Api) => {
  cardsContainer.innerHTML = ``;

  const renderCards = (updatedCards = null) => {
    const activeCards = updatedCards || cards;

    for (let i = 0; i < activeCards.length; i++) {
      const card = activeCards[i];

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
            const stopLoader = loader();

            block(popupContainer, `.film-details__comment-input`, `comment`);

            card.comments.push(newData.comment);

            Api.updateCard({id: card.id, data: card.toRAW()})
              .then((newCard) => load(newCard))

              .then((newCard) => {
                const comment = producedPopupBuilders.find((it) => it[`comment`]);

                unblock(popupContainer,
                  `.film-details__comment-input`,
                  `comment`, true);

                cardContainer.update(newCard);
                comment[`comment`].update(newCard);

              })
              .then(stopLoader)
              .catch(() => {

                popupContainer.shake();
                unblock(popupContainer, `.film-details__comment-input`,
                  `comment`, false);
              });
          };
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

      popupContainer.onRating = (data) => {
        const stopLoader = loader();

        block(popupContainer, `.film-details__user-rating-score`, `rating`);
        card.rating = data.rating;

        Api.updateCard({id: card.id, data: card.toRAW()})
          .then((newCard) => load(newCard))

          .then((newCard) => {
            const rating = producedPopupBuilders.find((it) => it[`rating`]);

            unblock(popupContainer,
              `.film-details__user-rating-score`,
              `rating`, true);

            rating[`rating`].update(newCard);
          })
          .then(stopLoader)
          .catch(() => {

            popupContainer.shake();
            unblock(popupContainer, `.film-details__user-rating-score`,
              `rating`, false);
          });

      };

      popupContainer.onControls = (target) => {

        card.isWatched = target.isWatched;
        card.willWatch = target.willWatch;
        card.isFavorite = target.isFavorite;

        popupContainer.update(card);
      };

      popupContainer.onClose = () => {
        cardContainer.bind();

        body.removeEventListener('keydown', formSubmission);
        body.removeChild(popupContainer.element);
        popupContainer.unrender();
      };
    }
  };
  renderCards();
}










