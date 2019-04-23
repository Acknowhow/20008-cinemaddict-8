import bridgeCard from './card-bridge';

import {getDescendingArrayByKey, getProfile, getHistoryList} from '../../assets/handler';
import {Key, Sort} from '../../data';
import buildProfile from '../profile/profile-builder';

const body = document.querySelector(`body`);
const cardsContainer = body.querySelector(
  `.films-list__container--main`);
const topCommentedContainer = body.querySelector(
  `.films-list__container--commented`);
const topRatedContainer = body.querySelector(
  `.films-list__container--rated`);
const profileContainer = body.querySelector(`.header__profile`);


export default (cards, cardsTotal, Api) => {
  cardsContainer.innerHTML = ``;
  topCommentedContainer.innerHTML = ``;
  topRatedContainer.innerHTML = ``;

  // const profileState = getProfile(cardsTotal);
  // const profile = buildProfile(profileState, profileContainer);

  const topCommentedCards = getDescendingArrayByKey(
    [...cards], `comments`, Sort.MOST_COMMENTED);

  const topRatedCards = getDescendingArrayByKey(
    [...cards], `overallRating`, Sort.MOST_RATED);

  for (let i = 0; i < topRatedCards.length; i++) {
    const card = topRatedCards[i];
    bridgeCard({
      card, container: topRatedContainer, Api});
  }

  for (let i = 0; i < topCommentedCards.length; i++) {
    const card = topCommentedCards[i];

    bridgeCard({
      card, container: topCommentedContainer, Api});
  }

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    bridgeCard({
      card, container: cardsContainer, Api});
  }
};
