/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/concreter/index.js":
/*!***************************************!*\
  !*** ./src/assets/concreter/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory */ "./src/assets/factory/index.js");


class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate BaseComponent, only concrete one.`);
    }

    this._element = null;
    this._state = {};
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  render() {
    this._element = Object(_factory__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.template);
    this.bind();
    return this._element;
  }

  bind() {}

  unbind() {}

  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }
}


/***/ }),

/***/ "./src/assets/factory/index.js":
/*!*************************************!*\
  !*** ./src/assets/factory/index.js ***!
  \*************************************/
/*! exports provided: manufacture, update, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manufacture", function() { return manufacture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const manufacture = (data, container, ...callbacks) => {
  const callBacksArray = [];

  while (callbacks.length) {
    const callback = callbacks.shift();

    callBacksArray.push(callback(data, container));
  }

  return callBacksArray;
};

const update = (data, ...callbacks) => {
  while (callbacks.length) {
    const callback = callbacks.shift();

    if (callback[update]) {
      callback.update(data);
    }
  }
};

const createElement = (template) => {
  const elementContainer = document.createElement(`div`);
  const templateContainer = document.createElement(`template`);
  templateContainer.innerHTML = template;

  elementContainer.appendChild(templateContainer.content);

  return elementContainer.firstElementChild;
};


/***/ }),

/***/ "./src/assets/handler/index.js":
/*!*************************************!*\
  !*** ./src/assets/handler/index.js ***!
  \*************************************/
/*! exports provided: getRandomIntInclusive, getRandomArrayElement, generateRandomText, getAverageRating, getHoursMinutes, getYear, getImagePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntInclusive", function() { return getRandomIntInclusive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayElement", function() { return getRandomArrayElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomText", function() { return generateRandomText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAverageRating", function() { return getAverageRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursMinutes", function() { return getHoursMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYear", function() { return getYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagePath", function() { return getImagePath; });
const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

const getRandomArrayElement = (array) => {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

const generateRandomText = (array, delimeter) => {
  const clonedArray = [...array];

  const randomIndex = getRandomIntInclusive(0, clonedArray.length - 1);
  const randomDeleteCount = getRandomIntInclusive(1, 3);

  return clonedArray.splice(randomIndex, randomDeleteCount).join(delimeter);
};

const getAverageRating = (array) => {
  const clonedArray = [...array];

  const sum = clonedArray.reduce((acc, index) => acc + index);
  return (sum / clonedArray.length).toFixed(1);
};

const getHoursMinutes = (seconds) => {
  return new Date(
      seconds * 1000 - 1000 * 60 * 60 * 3)
      .toLocaleString().replace(/:/g, ' ').substring(15);
};

const getYear = (timestamp) => {
  return new Date(timestamp).getFullYear();
};

const getImagePath = (image) => {
  return `./images/posters/${image}`;
};


/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/*! exports provided: Comments, card, filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
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
  1, 2, 3, 4, 5, 6, 7, 8, 9
];


// set
const countries = [
  `Russia`, `Lithuania`, `US`, `Canada`,
  `India`, `New Zealand`, `Australia`
];

const Comments = {
  [`sleeping`]: `😴`,
  [`neutral-face`]: `😐`,
  [`grinning`]: `😀`
};

const card = {
  titles,
  originalTitle: ``,
  releaseTimestamps,
  actors,
  descriptions,
  durations,
  episodes,
  genres,
  images,
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
};




const filters = [
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


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_app_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app-init */ "./src/modules/app-init.js");


Object(_modules_app_init__WEBPACK_IMPORTED_MODULE_0__["default"])();




/***/ }),

/***/ "./src/modules/app-init.js":
/*!*********************************!*\
  !*** ./src/modules/app-init.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_card_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card-bridge */ "./src/modules/card/card-bridge.js");


/* harmony default export */ __webpack_exports__["default"] = (() => {
  Object(_card_card_bridge__WEBPACK_IMPORTED_MODULE_0__["default"])();
});


/***/ }),

/***/ "./src/modules/card/card-bridge.js":
/*!*****************************************!*\
  !*** ./src/modules/card/card-bridge.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ "./src/data/index.js");
/* harmony import */ var _container_container_concreter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container-concreter */ "./src/modules/card/container/container-concreter.js");
/* harmony import */ var _popup_container_container_concreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../popup/container/container-concreter */ "./src/modules/popup/container/container-concreter.js");
/* harmony import */ var _main_main_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main-builder */ "./src/modules/card/main/main-builder.js");
/* harmony import */ var _filter_filter_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../filter/filter-builder */ "./src/modules/filter/filter-builder.js");
/* harmony import */ var _popup_info_info_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../popup/info/info-builder */ "./src/modules/popup/info/info-builder.js");
/* harmony import */ var _popup_comment_comment_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../popup/comment/comment-builder */ "./src/modules/popup/comment/comment-builder.js");
/* harmony import */ var _popup_rating_rating_builder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../popup/rating/rating-builder.js */ "./src/modules/popup/rating/rating-builder.js");
/* harmony import */ var _assets_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/handler */ "./src/assets/handler/index.js");
/* harmony import */ var _assets_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/factory */ "./src/assets/factory/index.js");















const body = document.querySelector(`body`);
const cardsContainer = body.querySelector(
    `.films-list__container--main`);

const filtersContainer = body.querySelector(
    `.main-navigation`);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  Object(_filter_filter_builder__WEBPACK_IMPORTED_MODULE_4__["default"])(_data__WEBPACK_IMPORTED_MODULE_0__["filters"], filtersContainer);

  filtersContainer.addEventListener(`click`, (e) => {
    const {target} = e;

    if (target.tagName.toUpperCase() === `A`) {
      let producedPopupBuilders = [];

      const {ratings, titles, images} = _data__WEBPACK_IMPORTED_MODULE_0__["card"];

      const src = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_8__["getRandomArrayElement"])(images);
      const title = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_8__["getRandomArrayElement"])(titles);

      const cardContainer = new _container_container_concreter__WEBPACK_IMPORTED_MODULE_1__["default"](ratings);
      const popupContainer = new _popup_container_container_concreter__WEBPACK_IMPORTED_MODULE_2__["default"](src, title);

      const formSubmission = (evt) => {
        evt.preventDefault();

        if (evt.ctrlKey === true && evt.keyCode === 13) {

          popupContainer.onSubmit = (newData) => {
            _data__WEBPACK_IMPORTED_MODULE_0__["card"].comment = newData.comment;
            _data__WEBPACK_IMPORTED_MODULE_0__["card"].rating = newData.rating;
          }
        }
      };

      const popupBuilders = [
        _popup_info_info_builder__WEBPACK_IMPORTED_MODULE_5__["default"], _popup_comment_comment_builder__WEBPACK_IMPORTED_MODULE_6__["default"], _popup_rating_rating_builder_js__WEBPACK_IMPORTED_MODULE_7__["default"]
      ];

      cardsContainer.appendChild(cardContainer.render());

      Object(_main_main_builder__WEBPACK_IMPORTED_MODULE_3__["default"])(_data__WEBPACK_IMPORTED_MODULE_0__["card"], cardContainer.element);

      cardContainer.onComments = () => {
        popupContainer.render();

        producedPopupBuilders = Object(_assets_factory__WEBPACK_IMPORTED_MODULE_9__["manufacture"])(
          _data__WEBPACK_IMPORTED_MODULE_0__["card"], popupContainer.element, ...popupBuilders);

        body.appendChild(popupContainer.element);
        body.addEventListener('keydown', formSubmission);
        cardContainer.unbind();
      };

      popupContainer.onClose = () => {
        cardContainer.bind();

        body.removeEventListener('keydown', formSubmission);
        body.removeChild(popupContainer.element);
        popupContainer.unrender();
      };
    }
  });
});


/***/ }),

/***/ "./src/modules/card/container/container-concreter.js":
/*!***********************************************************!*\
  !*** ./src/modules/card/container/container-concreter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _assets_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/concreter */ "./src/assets/concreter/index.js");


class Container extends _assets_concreter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(ratings) {
    super();
    this.ratings = ratings;
    this._onComments = null;

    this._onCommentsButtonClick = this._onCommentsButtonClick.bind(this);

  }

  _onCommentsButtonClick(e) {
    e.preventDefault();

    if (typeof this._onComments === `function`) {
      this._onComments();
    }
  }

  set onComments(fn) {
    this._onComments = fn;
  }


  get template() {
    return `<article class="film-card film-card">

          <button class="film-card__comments">${this.ratings.length} comments</button>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
          </article>`;
  }

  bind() {
    this._element.querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._onCommentsButtonClick);

  }

  unbind() {
    this._element.querySelector(`.film-card__comments`)
      .removeEventListener(`click`, this._onCommentsButtonClick);
  }
}


/***/ }),

/***/ "./src/modules/card/main/main-builder.js":
/*!***********************************************!*\
  !*** ./src/modules/card/main/main-builder.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-concreter */ "./src/modules/card/main/main-concreter.js");
/* harmony import */ var _assets_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/handler */ "./src/assets/handler/index.js");



/* harmony default export */ __webpack_exports__["default"] = ((card, container) => {
  const {
    titles, ratings, releaseTimestamps,
    durations, genres, images, descriptions
  } = card;


  const title = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayElement"])(titles);
  const averageRating = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getAverageRating"])(ratings);
  const releaseYear = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getYear"])(Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayElement"])(releaseTimestamps));
  const duration = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getHoursMinutes"])(Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayElement"])(durations));
  const genre = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayElement"])(genres);
  const imagePath = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getImagePath"])(Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayElement"])(images));
  const description = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["generateRandomText"])(descriptions, ``);

  const markup = Object(_main_concreter__WEBPACK_IMPORTED_MODULE_0__["default"])(
      title, averageRating, releaseYear,
      duration, genre, imagePath, description);

  container.insertAdjacentHTML(`afterbegin`, markup);
});


/***/ }),

/***/ "./src/modules/card/main/main-concreter.js":
/*!*************************************************!*\
  !*** ./src/modules/card/main/main-concreter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((title, averageRating, releaseYear,
    duration, genre, imagePath, description) => {
  return `
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${averageRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseYear}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${imagePath}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>`;
});



/***/ }),

/***/ "./src/modules/filter/filter-builder.js":
/*!**********************************************!*\
  !*** ./src/modules/filter/filter-builder.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_filter_filter_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../modules/filter/filter-concreter */ "./src/modules/filter/filter-concreter.js");


/* harmony default export */ __webpack_exports__["default"] = ((filters, container) => {
  for (const it of filters) {
    container.insertAdjacentHTML(`beforeend`, Object(_modules_filter_filter_concreter__WEBPACK_IMPORTED_MODULE_0__["default"])(
        {caption: it.name, amount: it.amount, state: it.state}));
  }
});


/***/ }),

/***/ "./src/modules/filter/filter-concreter.js":
/*!************************************************!*\
  !*** ./src/modules/filter/filter-concreter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((filterParams) => {
  const caption = filterParams.caption;
  const captionToLowerCase = caption.toLowerCase();
  const captionFirstLetterToUpperCase =
    caption.charAt(0).toUpperCase() + caption.slice(1);

  const amount = filterParams.amount;
  const state = filterParams.state;

  return `
<a href="#${captionToLowerCase}" 
class="main-navigation__item main-navigation__item${state ? `&#45;&#45;${state}` : ``}">
${captionFirstLetterToUpperCase} ${amount ? `<span class="main-navigation__item-count">${amount}</span>` : ``}
</a>`;

});


/***/ }),

/***/ "./src/modules/popup/comment/comment-builder.js":
/*!******************************************************!*\
  !*** ./src/modules/popup/comment/comment-builder.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-concreter */ "./src/modules/popup/comment/comment-concreter.js");


/* harmony default export */ __webpack_exports__["default"] = ((card, container) => {
  const {comments} = card;
  const commentContainer = container.querySelector(
      `.film-details__comments-wrap`);

  const comment = new _comment_concreter__WEBPACK_IMPORTED_MODULE_0__["default"](comments);

  commentContainer.appendChild(comment.render());
  return comment;
});


/***/ }),

/***/ "./src/modules/popup/comment/comment-concreter.js":
/*!********************************************************!*\
  !*** ./src/modules/popup/comment/comment-concreter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var _assets_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/concreter */ "./src/assets/concreter/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data */ "./src/data/index.js");



class Comment extends _assets_concreter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  _getComments() {
    const array = [];

    for (const [key, value] of Object.entries(_data__WEBPACK_IMPORTED_MODULE_1__["Comments"])) {
      array.push(`
        <input 
          class="film-details__emoji-item visually-hidden" 
          name="comment-emoji" 
          type="radio" 
          id="emoji-${key}" 
          value="${key}"
          >
        <label class="film-details__emoji-label" for="emoji-${key}">${value}</label>`)
    }

    return array;
  }

  get template() {
    return `
      <div>
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">1</span></h3>
        
        <ul class="film-details__comments-list">
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">😴</span>
            <div>
              <p class="film-details__comment-text">So long-long story, boring!</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">Tim Macoveev</span>
                <span class="film-details__comment-day">3 days ago</span>
              </p>
            </div>
          </li>
        </ul>
        
        <div class="film-details__new-comment">
          <div>
            <label for="add-emoji" class="film-details__add-emoji-label">😐</label>
            <input type="checkbox" class="film-details__add-emoji visually-hidden" id="add-emoji">
  
            <div class="film-details__emoji-list">${this._getComments().join(``)}</div>
          </div>
          <label class="film-details__comment-label">
            <textarea 
              class="film-details__comment-input" 
              placeholder="← Select reaction, add comment here" 
              name="comment">
            </textarea>
          </label>
        </div>
      </div>`;
  }

  bind() {
    // Bind Ctrl + Enter
  }
}


/***/ }),

/***/ "./src/modules/popup/container/container-concreter.js":
/*!************************************************************!*\
  !*** ./src/modules/popup/container/container-concreter.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _assets_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/concreter */ "./src/assets/concreter/index.js");


class Container extends _assets_concreter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(src, title) {
    super();

    this._src = src;
    this._title = title;

    this._onClose = null;
    this._onSubmit = null;

    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);

  }

  _processForm(formData) {
    const entry = {
      rating: null,
      comments: {
        [`sleeping`]: ``,
        [`neutral-face`]: ``,
        [`grinning`]: ``
      }
    };

    const ContainerMapper = Container.createMapper(entry);

    for (const pair of formData.entries()) {

      const [property, value] = pair;
      if (ContainerMapper[property]) {

        ContainerMapper[property](value);
      }
    }

    return entry;
  }

  _onCloseButtonClick(e) {
    e.preventDefault();

    if (typeof this._onClose === `function`) {
      this._onClose();
    }
  }

  _onSubmitAction() {

    const formData = new FormData(
      this._element.querySelector(`.film-details__inner`));

    const newData = this._processForm(formData);

    if (typeof this._onSubmit === `function`) {
      this._onSubmit(newData);
    }
  }

  set onClose(fn) {
    this._onClose = fn;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
    this._onSubmitAction();
  }

  get template() {
    return `
      <section class="film-details">
        <form class="film-details__inner" action="" method="get">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
          
          <!-- Info Builder -->

          </div>
      
          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" checked>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
      
          <section class="film-details__comments-wrap">

          <!-- Comment Builder -->
          
          </section>
      
          <section class="film-details__user-rating-wrap">
            <div class="film-details__user-rating-controls">
              <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
              <button class="film-details__watched-reset" type="button">undo</button>
            </div>
      
            <div class="film-details__user-score">
            
              <div class="film-details__user-rating-poster">
                <img src="${this._src}" alt="film-poster" class="film-details__user-rating-img">
              </div>
              
              <section class="film-details__user-rating-inner">
                <h3 class="film-details__user-rating-title">${this._title}</h3>
      
                <p class="film-details__user-rating-feelings">How you feel it?</p>
      
                <div class="film-details__user-rating-score">

                <!-- Rating Builder -->
           
                </div>
              </section>
            </div>
                
          </section>
        </form>
      </section>`;
  }

  bind() {
    this._element.querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, this._onCloseButtonClick);
  }

  unbind() {
    this._element.querySelector(`.film-details__close-btn`)
      .removeEventListener(`click`, this._onCloseButtonClick);
  }

  static createMapper(target) {
    return {
      [`comment-emoji`]: (value) => target.comment = value,
      score: (value) => target.score = value
    }
  }
}


/***/ }),

/***/ "./src/modules/popup/info/info-builder.js":
/*!************************************************!*\
  !*** ./src/modules/popup/info/info-builder.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-concreter */ "./src/modules/popup/info/info-concreter.js");
/* harmony import */ var _assets_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/handler */ "./src/assets/handler/index.js");



/* harmony default export */ __webpack_exports__["default"] = ((card, container) => {
  const {
    audiences, titles, ratings,
    actors, descriptions
  } = card;

  const infoContainer = container.querySelector(`.film-details__info-wrap`);

  const audience = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayElement"])(audiences);
  const title = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayElement"])(titles);
  const averageRating = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["getAverageRating"])(ratings);
  const randomActors = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["generateRandomText"])(actors, ` `);
  const description = Object(_assets_handler__WEBPACK_IMPORTED_MODULE_1__["generateRandomText"])(descriptions);

  const info = new _info_concreter__WEBPACK_IMPORTED_MODULE_0__["default"](audience, title, averageRating, randomActors, description);
  infoContainer.appendChild(info.render());

  return info;
});


/***/ }),

/***/ "./src/modules/popup/info/info-concreter.js":
/*!**************************************************!*\
  !*** ./src/modules/popup/info/info-concreter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var _assets_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/concreter */ "./src/assets/concreter/index.js");


class Info extends _assets_concreter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(audience, title, averageRating, actors, description) {
    super();
    this.audience = audience;
    this.title = title;
    this.averageRating = averageRating;
    this.actors = actors;
    this.description = description;
  }

  get template() {
    return `<div>
              <div class="film-details__poster">
                <img class="film-details__poster-img" src="images/posters/blackmail.jpg" alt="incredables-2">
        
                <p class="film-details__age">${this.audience}</p>
              </div>
      
              <div class="film-details__info">
                <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                    <h3 class="film-details__title">${this.title}</h3>
                    <p class="film-details__title-original">Original: Невероятная семейка</p>
                  </div>
        
                  <div class="film-details__rating">
                    <p class="film-details__total-rating">${this.averageRating}</p>
                    <p class="film-details__user-rating">Your rate 8</p>
                  </div>
                </div>
        
                <table class="film-details__table">
                  <tr class="film-details__row">
                    <td class="film-details__term">Director</td>
                    <td class="film-details__cell">Brad Bird</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Writers</td>
                    <td class="film-details__cell">Brad Bird</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Actors</td>
                    <td class="film-details__cell">${this.actors}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Release Date</td>
                    <td class="film-details__cell">15 June 2018 (USA)</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">118 min</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Country</td>
                    <td class="film-details__cell">USA</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Genres</td>
                    <td class="film-details__cell">
                      <span class="film-details__genre">Animation</span>
                      <span class="film-details__genre">Action</span>
                      <span class="film-details__genre">Adventure</span></td>
                  </tr>
                </table>
        
                <p class="film-details__film-description">${this.description}</p>
              </div>
            </div>`;
  }
}


/***/ }),

/***/ "./src/modules/popup/rating/rating-builder.js":
/*!****************************************************!*\
  !*** ./src/modules/popup/rating/rating-builder.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rating_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating-concreter */ "./src/modules/popup/rating/rating-concreter.js");


/* harmony default export */ __webpack_exports__["default"] = ((card, container) => {
  const {ratings} = card;

  const ratingContainer = container.querySelector(`
      .film-details__user-rating-score`);

  const rating = new _rating_concreter__WEBPACK_IMPORTED_MODULE_0__["default"](ratings);
  ratingContainer.appendChild(rating.render());

  return rating;
});



/***/ }),

/***/ "./src/modules/popup/rating/rating-concreter.js":
/*!******************************************************!*\
  !*** ./src/modules/popup/rating/rating-concreter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rating; });
/* harmony import */ var _assets_concreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/concreter */ "./src/assets/concreter/index.js");


class Rating extends _assets_concreter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(ratings) {
    super();

    this._ratings = ratings
  }

  _getRatings() {
    return this._ratings.map((it) => `
      <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="${it}" id="rating-${it}">
      <label class="film-details__user-rating-label" for="rating-${it}">${it}</label>`)
  }

  get template() {
    return `<div>${this._getRatings().join(``)}</div>`
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map