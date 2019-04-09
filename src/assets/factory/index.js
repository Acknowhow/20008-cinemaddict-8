export const manufacture = (data, container, ...callbacks) => {
  const callBacksArray = [];

  while (callbacks.length) {
    const callback = callbacks.shift();

    callBacksArray.push(callback(data, container));
  }

  return callBacksArray;
};

export const update = (data, ...callbacks) => {
  while (callbacks.length) {
    const callback = callbacks.shift();

    if (callback[update]) {
      callback.update(data);
    }
  }
};

export const createElement = (template) => {
  const elementContainer = document.createElement(`div`);
  const templateContainer = document.createElement(`template`);
  templateContainer.innerHTML = template;

  elementContainer.appendChild(templateContainer.content);

  return elementContainer.firstElementChild;
};
