export default (watchedCardsTotalCount, hoursValue, minutesValue, cardsTopGenre) => {
  const topGenreFirstLetterToUpperCase =
    cardsTopGenre.charAt(0).toUpperCase() + cardsTopGenre.slice(1);

  return `<li class="statistic__text-item">
          <h4 class="statistic__item-title">You watched</h4>
          <p class="statistic__item-text">${watchedCardsTotalCount} <span class="statistic__item-description">movies</span></p>
        </li>
        <li class="statistic__text-item">
          <h4 class="statistic__item-title">Total duration</h4>
          <p class="statistic__item-text">${hoursValue} <span class="statistic__item-description">h</span> ${minutesValue} <span class="statistic__item-description">m</span></p>
        </li>
        <li class="statistic__text-item">
          <h4 class="statistic__item-title">Top genre</h4>
          <p class="statistic__item-text">${topGenreFirstLetterToUpperCase}</p>
        </li>`;
};
