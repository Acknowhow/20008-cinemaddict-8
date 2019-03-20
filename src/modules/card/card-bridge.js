import {card, filters} from '../../data';

import buildContainer from './container/container-builder';
import buildMain from './main/main-builder';
import buildPopup from './popup/popup-builder';

import buildFilter from './../filter/filter-builder';

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

      const container = buildContainer(card);
      const popup = buildPopup(card);

      const getContainer = () => cardsContainer.appendChild(container.render());

      buildMain(card, getContainer());

      container.onComments = () => {
        popup.render();

        body.appendChild(popup.element);
        container.unbind();
      }

      popup.onClose = () => {
        container.bind();

        body.removeChild(popup.element);
        popup.unrender();
      }
    }
  });
};
