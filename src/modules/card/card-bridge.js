import moment from 'moment';
import CardContainer from './container/container-concreter';
import PopupContainer from './../popup/container/container-concreter';

import buildMain from './main/main-builder';
import buildInfo from './../popup/info/info-builder';
import buildComment from './../popup/comment/comment-builder';
import buildRating from './../popup/rating/rating-builder.js';

import {Key} from '../../data';

import {manufacture} from '../../assets/factory';
import {
  blockComment,
  unblockComment,
  blockRating,
  unblockRating,
  load, blockUndo, unblockUndo
} from '../../assets/util/';

const body = document.querySelector(`body`);

export default (scaffolding) => {
  const renderCard = () => {
    let producedPopupBuilders = [];

    const {
      card, container, Api
    } = scaffolding;

    const {
      comments, title, image,
      isFavorite, isWatched, willWatch
    } = card;

    const cardContainer = new CardContainer(comments);
    const popupContainer = new PopupContainer(
        {image, title, isFavorite, isWatched, willWatch});


    const formSubmit = (evt) => {
      if ((evt.ctrlKey === true ||
        evt.metaKey === true) && evt.keyCode === Key.ENTER) {

        popupContainer.onSubmit = (newData) => {

          blockComment(popupContainer, `.film-details__comment-input`);
          card.comments.push(newData.comment);

          Api.updateCard({id: card.id, data: card.toRAW()})
            .then((newCard) => load(newCard))

            .then((newCard) => {
              const comment = producedPopupBuilders.find((it) => it[`comment`]);

              unblockComment(popupContainer,
                  `.film-details__comment-input`, true);

              cardContainer.update(newCard);
              comment[`comment`].update(newCard);
              popupContainer.update(newCard);
              popupContainer.enable();

            })
            .catch(() => {

              popupContainer.shake();
              unblockComment(popupContainer,
                  `.film-details__comment-input`, false);
            });
        };
      }
    };

    const popupHide = (evt) => {
      const key = evt.keyCode;
      if (key === Key.ESCAPE) {
        popupContainer.onCloseKey = () => {
          cardContainer.bind();

          body.removeEventListener(`keydown`, formSubmit);
          body.removeEventListener(`keydown`, popupHide);
          body.removeChild(popupContainer.element);
          popupContainer.unrender();
        };
      }
    };

    const popupBuilders = [
      buildInfo, buildComment, buildRating
    ];

    container.appendChild(cardContainer.render());
    buildMain(card, cardContainer.element);

    cardContainer.onComments = () => {
      popupContainer.render();

      producedPopupBuilders = manufacture(
          card, popupContainer.element, ...popupBuilders);

      popupContainer.updateState();

      body.appendChild(popupContainer.element);
      body.addEventListener(`keydown`, formSubmit);
      body.addEventListener(`keydown`, popupHide);

      cardContainer.unbind();
    };

    cardContainer.onWillWatch = () => {

      if (card.willWatch === true) {
        card.willWatch = false;
      } else {
        card.willWatch = true;
      }
    };

    container.onWatched = () => {
      if (card.isWatched === true) {
        card.willWatch = false;
      } else {
        card.willWatch = true;
      }
    };

    container.onFavorite = () => {
      if (card.isFavorite === true) {
        card.isFavorite = false;
      } else {
        card.isFavorite = true;
      }
    };

    popupContainer.onRating = (data) => {

      blockRating(popupContainer, `.film-details__user-rating-score`);
      card.rating = data.rating;

      Api.updateCard({id: card.id, data: card.toRAW()})
        .then((newCard) => load(newCard))

        .then((newCard) => {
          const rating = producedPopupBuilders.find((it) => it[`rating`]);

          unblockRating(popupContainer,
              `.film-details__user-rating-score`, true);

          rating[`rating`].update(newCard);
        })
        .catch(() => {

          popupContainer.shake();
          unblockRating(popupContainer,
              `.film-details__user-rating-score`, false);
        });
    };

    popupContainer.onControls = (target) => {

      card.isWatched = target.isWatched;
      card.willWatch = target.willWatch;
      card.isFavorite = target.isFavorite;

      card.willWatchDate = target.willWatch ?
        moment().valueOf() : target.willWatchDate;

      popupContainer.update(card);
    };

    popupContainer.onUndo = (target) => {

      blockUndo(popupContainer, target);
      card.comments.pop();

      Api.updateCard({id: card.id, data: card.toRAW()})
        .then((newCard) => load(newCard))

        .then((newCard) => {
          const comment = producedPopupBuilders.find((it) => it[`comment`]);

          unblockUndo(popupContainer,
              target, true);

          cardContainer.update(newCard);
          comment[`comment`].update(newCard);
          popupContainer.update(newCard);
          popupContainer.disable();

        })
        .catch(() => {

          popupContainer.shake();
          unblockUndo(popupContainer,
              target, false);
        });
    };

    popupContainer.onCloseButton = () => {
      cardContainer.bind();

      body.removeEventListener(`keydown`, formSubmit);
      body.removeEventListener(`keydown`, popupHide);
      body.removeChild(popupContainer.element);
      popupContainer.unrender();
    };
  };
  renderCard();
};
