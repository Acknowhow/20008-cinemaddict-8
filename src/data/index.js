export const ratings = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

export const Sort = {
  [`MOST_COMMENTED`]: 2,
  [`MOST_RATED`]: 2
};

export const Key = {
  ESCAPE: 27,
  ENTER: 13
};

export const Delay = {
  MESSAGE: 3000,
  UPDATE: 2000
};

export const Color = {
  CHECKED: `#FFE800`,
  ACTIVE: `#D8D8D8`,
  ALERT: `#DC143C`
};

export const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`
};

export const Comments = {
  [`sleeping`]: `😴`,
  [`neutral-face`]: `😐`,
  [`grinning`]: `😀`
};

export const Filter = {
  [`#all movies`]: `all`,
  [`#watchlist`]: `watchlist`,
  [`#history`]: `history`,
  [`#favorites`]: `favorites`,
  [`#stats`]: `stats`
};

export const filters = [
  {
    name: `All movies`,
    count: null,
    state: `active`,
  },

  {
    name: `watchlist`,
    count: null,
    state: false
  },

  {
    name: `history`,
    count: null,
    state: false
  },

  {
    name: `favorites`,
    count: null,
    state: false
  },

  {
    name: `stats`,
    count: null,
    state: `additional`
  },
];
