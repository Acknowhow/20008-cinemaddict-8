import {getWatchedState} from '../assets/handler';

export default class ModelCard {
  constructor(data) {
    this.id = data[`id`];
    this.actors = data[`film_info`][`actors`];
    this.audience = data[`film_info`][`age_rating`];
    this.originalTitle = data[`film_info`][`alternative_title`];
    this.description = data[`film_info`][`description`];
    this.director = data[`film_info`][`director`];
    this.genre = data[`film_info`][`genre`] || [];
    this.image = data[`film_info`][`poster`];
    this.releaseDate = data[`film_info`][`release`][`date`];
    this.country = data[`film_info`][`release`][`release_country`];
    this.duration = data[`film_info`][`runtime`];
    this.title = data[`film_info`][`title`];
    this.overallRating = data[`film_info`][`total_rating`];
    this.writers = data[`film_info`][`writers`];

    this.comments = data[`comments`];

    this.rating = data[`user_details`][`personal_rating`];

    this.isFavorite = Boolean(data[`user_details`][`favorite`]);
    this.willWatch = Boolean(data[`user_details`][`watchlist`]);
    this.willWatchDate = data[`user_details`][`watching_date`];

    this.isWatched = getWatchedState(
      Boolean(data[`user_details`][`already_watched`]), this.willWatchDate);
  }

  toRAW() {
    return {
      'id': this.id,
      [`film_info`]:
        {
          [`actors`]: this.actors,
          [`age_rating`]: this.audience,
          [`alternative_title`]: this.originalTitle,
          [`description`]: this.description,
          [`director`]: this.director,
          [`genre`]: this.genre,
          [`poster`]: this.image,
          [`release`]: {
            [`date`]: this.releaseDate,
            [`release_country`]: this.country
          },
          [`runtime`]: this.duration,
          [`title`]: this.title,
          [`total_rating`]: this.overallRating,
          [`writers`]: this.writers
        },
      [`comments`]: this.comments,

      [`user_details`]: {
        [`personal_rating`]: this.rating,
        [`already_watched`]: this.isWatched,
        [`favorite`]: this.isFavorite,
        [`watchlist`]: this.willWatch,
        [`watching_date`]: this.willWatchDate
      }

    };
  }

  static parseCard(data) {
    return new ModelCard(data);
  }

  static parseCards(data) {
    return data.map(ModelCard.parseCard);
  }
}
