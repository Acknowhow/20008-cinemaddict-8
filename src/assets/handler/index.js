import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format/lib/moment-duration-format';
momentDurationFormatSetup(moment);
import {Sort} from './../../data';

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export const invert = (object) => {
  const newObject = {};

  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      newObject[object[prop]] = prop;
    }
  }
  return newObject;
};

export const getDescendingArrayByKey = (array, key, limit) => {
  return array.sort((a, b) => {
    const first = key === Sort.MOST_COMMENTED ? a[key].length : a[key];
    const second = key === Sort.MOST_RATED ? b[key].length : b[key];

    return second > first;
  }).slice(0, limit);
};

export const toJSON = (response) => {
  return response.json();
};

export const getHistoryList = (cards) => {
  return cards.filter((it) => it.isWatched === true);
};

const getWatchList = (cards) => {
  return cards.filter((it) => it.willWatch === true);
};

const getFavoritesList = (cards) => {
  return cards.filter((it) => it.isFavorite === true);
};

const getArrayMax = (array) => {
  return array.reduce((p, v) => {
    return (p > v ? p : v);
  })
};

export const getSlicedArray = (array, start, end) => {
  return array.slice(start, end);
};

export const getCommentDate = (timeStamp) => {
  const currentTimestamp = moment().valueOf();
  const difference = currentTimestamp - timeStamp;

  const duration = moment.duration(difference, `milliseconds`);

  if (duration.asYears() >= 1) {
    return duration.format(`Y [years] M [months] D [days]`);
  }

  if (duration.asMonths() >= 1) {
    return duration.format(`M [months] d [days]`);
  }

  if (duration.asDays() >= 1) {
    return duration.format(`d [days]`);
  }
  if (duration.asHours() >= 1) {
    return duration.format(`hh [hours] mm [minutes]`);
  }

  if (duration.asMinutes() >= 1) {
    return duration.format(`mm [minutes]`);
  }

  return duration.format(`ss [seconds]`);
};

export const getHoursValue = (string) => {
  return [...string].slice(
    0, string.indexOf(`h`)).join(``);
};

export const getMinutesValue = (string) => {
  const startIndex = string.indexOf(` `) + 1;
  return [...string].slice(
    startIndex, string.indexOf(`m`)).join(``);
};


export const getHoursMinutes = (minutes) => {
  return moment.duration(minutes, `minutes`).format(`h[h] m[m]`);
};

export const getCardsByGenre = (cards) => {
  return cards.map((it) => it.genre);
};

export const getCardsByGenreCounted = (cards) => {
  return cards.reduce((accumulator, currentValue) => {

    if (currentValue in accumulator) {
      accumulator[currentValue]++;

    } else {
      accumulator[currentValue] = 1;
    }

    return accumulator;
  }, {});
};

export const getCardsByGenreSorted = (object) => {
  const sorted = Object.entries(object).sort((a, b) => a[1] < b[1]);
  const genresArray = sorted.map((it) => it[0]);
  const genresCountArray = sorted.map((it) => it[1]);

  return {genresArray, genresCountArray};
};

export const getWatchedCardsTotalCount = (array) =>
  array.filter((it) => it.isWatched === true).length;

export const getCardsTotalDuration = (array) => {
  const minutes = array.map((it) => it.duration).reduce((acc, cur) => acc + cur);

  return getHoursMinutes(minutes);
};


export const getCardsTopGenre = (object) => {
  const entries = [...Object.entries(object)];
  const topCount = getArrayMax([...Object.values(object)]);

  return entries.find((it) => it[1] === topCount)[0];
};

export const getYear = (timestamp) => {
  return moment(`${timestamp}`, `x`).format('DD MMM YYYY');
};

export const getProfile = (array) => {
  const filmsCount = getHistoryList(array).length;

  if (filmsCount >= 21) {
    return `movie buff`;
  }
  if (filmsCount >= 11) {
    return `fan`;
  }
  if (filmsCount >= 1) {
    return `novice`;
  }

  return ``;
};

export const getFilteredCards = (cards, filterName) => {
  const filterNameToLowerCase = filterName.toLowerCase();

  switch (filterNameToLowerCase) {
    case `watchlist`:
      return getWatchList(cards);

    case `history`:
      return getHistoryList(cards);

    case `favorites`:
      return getFavoritesList(cards);

    case `stats`:
      return `stats`;

    default:
      return cards;
  }
};

export const getFiltersState = (cards, filters) => {
  return filters.map((it) => {

    switch (it.name) {
      case `watchlist`:
        it.count = getWatchList(cards).length;
        it.state = it.count > 0 ? `` : false;
        return it;

      case `history`:
        it.count = getHistoryList(cards).length;
        it.state = it.count > 0 ? `` : false;
        return it;

      case `favorites`:
        it.count = getFavoritesList(cards).length;
        it.state = it.count > 0 ? `` : false;
        return it;

      case `stats`:
        it.count = null;
        it.state = `additional`;
        return it;

      default:
        it.count = null;
        it.state = `active`;
        return it;
    }
  });
};
