import Rating from './rating-concreter';
import {ratings} from '../../../data';

export default (card, container) => {

  const ratingContainer = container.querySelector(`
      .film-details__user-rating-score`);

  const rating = new Rating(ratings);
  ratingContainer.appendChild(rating.render());

  return rating;
};

