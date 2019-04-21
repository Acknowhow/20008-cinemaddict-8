import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format/lib/moment-duration-format';

import Component from '../../../assets/concreter';
import {Comments} from '../../../data';

export default class Comment extends Component {
  constructor(comments) {
    super();
    this._comments = comments;

  }

  _getUserComments() {
    momentDurationFormatSetup(moment);

    return this._comments.map((value, key) => {
      const emoji = this._comments[key][`emotion`];

      return `
        <li class="film-details__comment">
          <span class="film-details__comment-emoji">${Comments[emoji]}</span>
          <div>
            <p class="film-details__comment-text">${this._comments[key][`comment`]}</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">${this._comments[key][`author`]}</span>
              <span class="film-details__comment-day">${moment.duration(this._comments[key][`date`], `milliseconds`).format()} ago</span>
            </p>
          </div>
        </li>`
    })
  }

  _getComments() {
    const array = [];

    for (const [key, value] of Object.entries(Comments)) {
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
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments.length}</span></h3>
        
        <ul class="film-details__comments-list">${this._getUserComments().join(``)}</ul>
        
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
}
