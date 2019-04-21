export default class ModelCard {
  constructor(data) {
    this.id = data[`id`];
    this.actors = data[`film_info`][`actors`];
    this.audience = data[`film_info`][`age_rating`];
    this.originalTitle = data[`film_info`][`alternative_title`];
    this.description = data[`film_info`][`description`];
    this.director = data[`film_info`][`director`];
    this.genre = data[`film_info`][`genre`];
    this.image = data[`film_info`][`poster`];
    this.releaseDate = data[`film_info`][`release`][`date`];
    this.country = data[`film_info`][`release`][`release_country`];
    this.duration = data[`film_info`][`runtime`];
    this.title = data[`film_info`][`title`];
    this.overallRating = data[`film_info`][`total_rating`];
    this.rating = data[`user_details`][`personal_rating`];
    this.writers = data[`film_info`][`writers`];

    this.comments = data[`comments`];

    this.isWatched = Boolean(data[`user_details`][`already_watched`]);
    this.isFavorite = Boolean(data[`user_details`][`favorite`]);
    this.willWatch = Boolean(data[`user_details`][`watchlist`]);
    this.willWatchDate = data[`user_details`][`watching_date`];

    this.isDone = Boolean(data[`is_done`]);
  }

  toRAW() {
    return {
      'id': this.id,
      'comments': {
        'author': this.author,
        'emotion': this.emotion,
        'comment': this.comment,
        'date': this.commentDate,
      },
      [`user_details`]: {
        'favorite': this.isFavorite,
        'already_watched': this.isWatched,
        'watchlist': this.willWatch
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
