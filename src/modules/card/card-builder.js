import {cards} from '../../data/data';
import {selectedCards} from '../../data/data';

import {insert} from '../../helpers/insert';

const cardsContainer = document.querySelector(
    `.films-list > .films-list__container`);

const cardsContainerTopRated = document.querySelector(
    `.films section:nth-child(2) .films-list__container`);

const cardsContainerMostCommented = document.querySelector(
    `.films section:nth-child(3) .films-list__container`);

const navigation = document.querySelector(`.main-navigation`);

export default () => {
  navigation.onclick = (e) => {

    const target = e.target;

    if (target.tagName.toUpperCase() === `A`) {
      insert(cards, cardsContainer);

      insert(selectedCards, cardsContainerTopRated);
      insert(selectedCards, cardsContainerMostCommented);
    }
  };
};


