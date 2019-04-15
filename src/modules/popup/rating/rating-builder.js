import Rating from './rating-concreter';

export default (card, container) => {
  const {ratings} = card;

  const ratingContainer = container.querySelector(`
      .film-details__user-rating-score`);

  const rating = new Rating(ratings);
  ratingContainer.appendChild(rating.render());

  return rating;
};

