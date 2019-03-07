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
const ratings = [
  5, 7, 10, 9, 10, 8, 7, 4
];

// set
const countries = [
  `Russia`, `Lithuania`, `US`, `Canada`,
  `India`, `New Zealand`, `Australia`
];


export const card = {
  titles,
  originalTitle: ``,
  releaseTimestamps,
  actors,
  descriptions,
  durations,
  episodes,
  genres,
  images,
  audiences,
  premiereTimestamps,
  digitalReleaseTimestamps,
  ratings,
  countries,
  isFavorite: true,
  isWatched: false,
  willWatch: true
};


export const filters = [
  {
    name: `All movies`,
    amount: null,
    state: `active`,
  },

  {
    name: `watchlist`,
    amount: 13,
    state: false
  },

  {
    name: `history`,
    amount: 4,
    state: false
  },

  {
    name: `favorites`,
    amount: 8,
    state: false
  },

  {
    name: `stats`,
    amount: null,
    state: `additional`
  },
];


export const cards = [
  `<article class="film-card">
          <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`,

  `<article class="film-card">
          <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`,

  `<article class="film-card">
          <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`,

  `<article class="film-card">
          <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`,

  `<article class="film-card">
          <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`,

  `<article class="film-card">
          <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`,

  `<article class="film-card">
          <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`
];

export const selectedCards = [
  `<article class="film-card film-card--no-controls">
          <h3 class="film-card__title">Incredibles 2</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/fuga-da-new-york.jpg" alt="" class="film-card__poster">
          <button class="film-card__comments">13 comments</button>
        </article>`,
  `<article class="film-card film-card--no-controls">
          <h3 class="film-card__title">Incredibles 2</h3>
          <p class="film-card__rating">9.8</p>
          <p class="film-card__info">
            <span class="film-card__year">2018</span>
            <span class="film-card__duration">1h&nbsp;13m</span>
            <span class="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/fuga-da-new-york.jpg" alt="" class="film-card__poster">
          <button class="film-card__comments">13 comments</button>
        </article>`
];
