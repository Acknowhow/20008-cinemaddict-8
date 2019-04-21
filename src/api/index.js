import {toJSON, checkStatus} from '../assets/handler';
import ModelCard from '../data/model';

import {Method} from '../data';
export default class API {
  constructor({endPoint, authorization}) {
    this._endPoint = endPoint;
    this._authorization = authorization;
  }

  getCards() {
    return this._load({url: `movies`})
      .then(toJSON)
      .then(ModelCard.parseCards);
  }

  createCard({task}) {
    return this._load({
        url: `movies`,
        method: Method.POST,
        body: JSON.stringify(task),
        headers: new Headers({'Content-Type': `application/json`})
      })
      .then(toJSON)
      // .then(ModelTask.parseTask);
  }

  updateCard({id, data}) {
    return this._load({
        url: `movies/${id}`,
        method: Method.PUT,
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': `application/json`})
      })
      .then(toJSON)
      // .then(ModelTask.parseTask);
  }

  deleteCard(id) {
    return this._load({
      url: `movies/${id}`,
      method: Method.DELETE
    });
  }

  _load({url, method = Method.GET, body = null, headers = new Headers()}) {
    headers.append(`Authorization`, this._authorization);

    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((err) => {

        console.error(err);

        throw err;
      });
  }
}
