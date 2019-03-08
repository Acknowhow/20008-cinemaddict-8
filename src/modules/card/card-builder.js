import {cards, selectedCards} from '../../data';

import {insert} from '../../assets/handler';

const cardsContainer = document.querySelector(
    `.films-list__container--main`);

const cardsContainerRated = document.querySelector(
    `.films-list__container--rated`);

const cardsContainerCommented = document.querySelector(
    `.films-list__container--commented`);

const navigation = document.querySelector(`.main-navigation`);

export default () => {
  navigation.addEventListener(`click`, (e) => {

    const {target} = e;

    if (target.tagName.toUpperCase() === `A`) {
      insert(cards, cardsContainer);

      insert(selectedCards, cardsContainerRated);
      insert(selectedCards, cardsContainerCommented);
    }
  });
};


