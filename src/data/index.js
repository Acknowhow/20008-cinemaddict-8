import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format/lib/moment-duration-format';
momentDurationFormatSetup(moment);

import {
  generateRandomText,
  getImagePath,
  getRandomArrayElement, getYear} from '../assets/handler';

const titles = [
  `Usual Suspects`, `Scarface`, `Fight Club`, `Tokyo Story`,
  `We Need to Talk About Kevin`, `Suspiria`, `Hannibal`, `Devil's Advocate`,
  `Green Mile`, `Catch Me if You Can`, `Shutter Island`, `The Godfather`,
  `My Own Private Idaho`, `Shawshank Redemption`, `Ichi the Killer`
];

const releaseTimestamps = [
  1483390800000, -157604400000, 505083600000, 915310800000, 978469200000
];

const actors = [
  `Morgan Freeman`, `Leonardo di Caprio`, `Al Pacino`, `Tilda Suinton`,
  `Brad Pitt`, `River Phoenix`, `Tim Robbins`, `Kevin Spacey`,
  `Edward Norton`, `Keanu Reeves`, `Benicio del Toro`, `Tadanobu Asano`
];

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus`
];

// array
const durations = [
  120, 60, 80, 140
];

// map
const episodes = [
  {}
];

// set
const genres = [
  `horror`, `comedy`, `melodramatic`, `fiction`, `documental`
];

// set
const images = [
  `accused.jpg`, `blackmail.jpg`, `blue-blazes.jpg`,
  `fuga-da-new-york.jpg`, `moonrise.jpg`, `three-friends.jpg`
];

// set
const audiences = [
  `G`, `PG`, `PG-13`, `R`, `NC-17`
];

const premiereTimestamps = [
  1483390800000, -157604400000, 505083600000, 915310800000, 978469200000
];
// array

const digitalReleaseTimestamps = [
  189464400000, 568155600000, 883774800000, 978469200000
];

// array
export const ratings = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];


// set
const countries = [
  `Russia`, `Lithuania`, `US`, `Canada`,
  `India`, `New Zealand`, `Australia`
];

const comments = [
  {
    comment: `So long story, so boring`,
    [`comment-emoji`]: `sleeping`,
    score: 7
  },
  {
    comment: `This was awesome`,
    [`comment-emoji`]: `grinning`,
    score: 9
  },
  {
    comment: `Poor acting`,
    [`comment-emoji`]: `neutral-face`,
    score: 6
  }
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


export const cards = [
  {
    title: titles[0],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: false,
    willWatch: true
  },
  {
    title: titles[1],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: false,
    willWatch: false
  },
  {
    title: titles[2],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: false,
    willWatch: true
  },
  {
    title: titles[3],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: true,
    willWatch: false
  },
  {
    title: titles[4],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: false,
    willWatch: true
  },
  {
    title: titles[5],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: true,
    willWatch: true
  },
  {
    title: titles[6],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: true,
    willWatch: false
  },
  {
    title: titles[7],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: false,
    isWatched: true,
    willWatch: false
  },
  {
    title: titles[8],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: true,
    willWatch: true
  },
  {
    title: titles[9],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: true,
    willWatch: false
  },
  {
    title: titles[10],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: true,
    willWatch: false
  },
  {
    title: titles[11],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: true,
    willWatch: true
  },
  {
    title: titles[12],
    originalTitle: ``,
    releaseYear: getYear(getRandomArrayElement(releaseTimestamps)),
    actors: generateRandomText(actors, ` `),
    description: generateRandomText(descriptions, ``),
    duration: getRandomArrayElement(durations),
    episodes,
    genre: getRandomArrayElement(genres),
    image: getImagePath(getRandomArrayElement(images)),
    comments,
    comment: ``,
    audiences,
    premiereTimestamps,
    digitalReleaseTimestamps,
    ratings,
    rating: ``,
    countries,
    isFavorite: true,
    isWatched: true,
    willWatch: true
  }
];

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
