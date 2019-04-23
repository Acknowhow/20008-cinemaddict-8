import {Method, Color, Delay} from '../../data';

const container = document.querySelector(`.film-list__no-cards`);

const hideMessageContainer = () => {
  setTimeout(() => {
    container.classList.add(`visually-hidden`);
  }, Delay.MESSAGE);
};

export const loader = () => {
  container.classList.remove(`visually-hidden`);
  container.innerHTML = `Loading movies...`;

  return () => {
    container.innerHTML = `
    Congratulations, all movies were loaded! Documentalist or horrorist? It's your turn.`;
    hideMessageContainer();
  };
};

export const error = (method) => {
  if (method === Method.GET) {
    const errorContainer = document.querySelector(`.board__no-tasks`);

    if (errorContainer.classList.contains(`visually-hidden`)) {
      errorContainer.classList.remove(`visually-hidden`);
    }
    errorContainer.innerHTML = `
        Something went wrong while loading your movies. Check your connection or try again later`;
    hideMessageContainer();
  }
};

export const load = (result) => {

  return new Promise((resolve, reject) => {
    setTimeout(result ? resolve(result) : reject, Delay.UPDATE);
  });
};

const updateFrame = (component, field, state) => {
  if (state === `block`) {
    component.element
      .querySelector(`.film-details__inner`).style.border = `1px solid ${Color.ALERT}`;
    field.disabled = true;
  }
  if (state === `unblock`) {
    component.element.querySelector(`.film-details__inner`).style.border = `none`;
    field.disabled = false;
  }
};

export const blockComment = (component, selector) => {
  const field = component.element.querySelector(`${selector}`);

  component.element.querySelector(`.film-details__add-emoji`).disabled = true;
  component.element.querySelector(`.film-details__comment-input`).disabled = true;
  field.style.border = `none`;

  updateFrame(component, field, `block`);
};

export const unblockComment = (component, selector, success) => {
  const field = component.element.querySelector(`${selector}`);

  component.element.querySelector(`.film-details__add-emoji`).disabled = false;
  component.element.querySelector(`.film-details__comment-input`).disabled = false;

  if (success === false) {
    field.style.border = `1px solid ${Color.ALERT}`;
  }
  updateFrame(component, field, `unblock`);
};

export const blockRating = (component, selector) => {
  const field = component.element.querySelector(`${selector}`);

  field.style.pointerEvents = `none`;

  const labels = [...component.element.querySelectorAll(`
      .film-details__user-rating-label`)];

  for (const label of labels) {
    label.style.backgroundColor = Color.ACTIVE;
  }

  updateFrame(component, field, `block`);
};

export const unblockRating = (component, selector, success) => {
  const field = component.element.querySelector(`${selector}`);
  field.style.pointerEvents = `auto`;

  if (success === false) {
    component.element.querySelector(`
    .film-details__user-rating-input:checked + .film-details__user-rating-label`)
      .style.backgroundColor = Color.ALERT;
  }

  if (success === true) {
    component.element.querySelector(`
    .film-details__user-rating-input:checked + .film-details__user-rating-label`)
      .style.backgroundColor = Color.CHECKED;
  }
  updateFrame(component, field, `unblock`);
};

export const blockUndo = (component, target) => {
  target.style.pointerEvents = `none`;

  updateFrame(component, target, `block`);
};

export const unblockUndo = (component, target, success) => {
  target.style.pointerEvents = `auto`;

  if (success === false) {
    target.style.color = Color.ALERT;
  }

  updateFrame(component, target, `unblock`);
};

