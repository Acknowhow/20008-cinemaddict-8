import {Method} from '../../data';

const container = document.querySelector(`.film-list__no-cards`);

const hideMessageContainer = () => {
  setTimeout(() => {
    container.classList.add(`visually-hidden`);
  }, 3000);
}

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
  console.log(result)
  return new Promise((resolve, reject) => {
    setTimeout(result ? resolve(result) : reject, 2000)
  });
};

export const block = (component, selector, flag) => {
  const field = component.element.querySelector(`${selector}`);

  if (flag === `comment`) {
    component.element.querySelector(`.film-details__add-emoji`).disabled = true;
    component.element.querySelector(`.film-details__comment-input`).disabled = true;
    field.style.border = `none`;
  }
  if (flag === `rating`) {
    field.style.pointerEvents = `none`;

    const labels = [...component.element.querySelectorAll(`.film-details__user-rating-label`)];

    for (const label of labels) {
      label.style.backgroundColor = `#d8d8d8`;

    }
  }
  component.element.querySelector(`.film-details__inner`).style.border = `1px solid #DC143C`;
  field.disabled = true;
};

export const unblock = (component, selector, flag, success) => {
  const field = component.element.querySelector(`${selector}`);

  if (flag === `comment`) {
    component.element.querySelector(`.film-details__add-emoji`).disabled = false;
    component.element.querySelector(`.film-details__comment-input`).disabled = false;
  }

  if (flag === `comment` && success === false) {
    field.style.border = `1px solid #DC143C`;
  }

  if (flag === `rating`) {
    field.style.pointerEvents = `auto`;
  }

  if (flag === `rating` && success === false) {
    component.element.querySelector(`
    .film-details__user-rating-input:checked + .film-details__user-rating-label`)
      .style.backgroundColor = `#DC143C`;

  }

  if (flag === `rating` && success === true) {
    component.element.querySelector(`
    .film-details__user-rating-input:checked + .film-details__user-rating-label`)
      .style.backgroundColor = `#ffe800`;
  }

  component.element.querySelector(`.film-details__inner`).style.border = `none`;
  field.disabled = false;
};
