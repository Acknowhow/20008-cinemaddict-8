import Rating from './rating-concreter';
import {ratings} from '../../../data';

export default (card, container) => {

  const userRating = card.rating;
  const ratingContainer = container.querySelector(`
      .film-details__user-rating-score`);

  const rating = new Rating(userRating, ratings);
  ratingContainer.appendChild(rating.render());

  return {rating};
};

