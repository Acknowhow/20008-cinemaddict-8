import Rating from './rating-concreter';
import {ratings} from '../../../data';

export default (card, container) => {

  const {rating} = card;
  const ratingContainer = container.querySelector(`
      .film-details__user-rating-score`);

  const ratingConcrete = new Rating(rating, ratings);
  ratingContainer.appendChild(ratingConcrete.render());

  return ratingConcrete;
};

