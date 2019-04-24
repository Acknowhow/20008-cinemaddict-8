import bridgeCard from './card-bridge';

import {getDescendingArrayByKey} from '../../assets/handler';
import {Sort} from '../../data';

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
      [...cardsTotal], `comments`, Sort.MOST_COMMENTED);

  const topRatedCards = getDescendingArrayByKey(
      [...cardsTotal], `overallRating`, Sort.MOST_RATED);


  for (const card of topRatedCards) {
    bridgeCard({
      card, container: topRatedContainer, Api});
  }

  for (const card of topCommentedCards) {
    bridgeCard({
      card, container: topCommentedContainer, Api});
  }

  for (const card of cards) {
    bridgeCard({
      card, container: cardsContainer, Api});
  }
};
