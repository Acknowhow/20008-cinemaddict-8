export const createElement = (template) => {
  const elementContainer = document.createElement(`div`);
  elementContainer.insertAdjacentHTML(`beforeend`, template);

  return elementContainer.firstElementChild;

};
