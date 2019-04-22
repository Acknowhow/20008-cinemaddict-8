export const ratings = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

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
    count: 13,
    state: false
  },

  {
    name: `history`,
    count: 4,
    state: false
  },

  {
    name: `favorites`,
    count: 8,
    state: false
  },

  {
    name: `stats`,
    count: null,
    state: `additional`
  },
];
