import bridgeCard from './card-bridge';

import {getDescendingArrayByKey} from '../../assets/handler';
import {Key, Sort} from '../../data';

const body = document.querySelector(`body`);
const cardsContainer = body.querySelector(
  `.films-list__container--main`);
const topCommentedContainer = body.querySelector(
  `.films-list__container--commented`);
const topRatedContainer = body.querySelector(
  `.films-list__container--rated`);


export default (cards, cardsTotal, Api) => {
  cardsContainer.innerHTML = ``;
  topCommentedContainer.innerHTML = ``;
  topRatedContainer.innerHTML = ``;


  const topCommentedCards = getDescendingArrayByKey(
    [...cards], `comments`, Sort.MOST_COMMENTED);

  const topRatedCards = getDescendingArrayByKey(
    [...cards], `overallRating`, Sort.MOST_RATED);

  for (let i = 0; i < topRatedCards.length; i++) {
    const card = topRatedCards[i];
    bridgeCard(card, topRatedContainer, Api);
  }

  for (let i = 0; i < topCommentedCards.length; i++) {
    const card = topCommentedCards[i];

    bridgeCard(card, topCommentedContainer, Api);
  }

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    bridgeCard(card, cardsContainer, Api);
  }
};
