import concreteMain from './main-builder';
import {
  getImagePath,
  getRandomArrayElement,
  generateRandomText,
  insertTemplate} from '../../../assets/handler';

export default (container, images, descriptions) => {
 const imagePath = getImagePath(getRandomArrayElement(images));
 const description = generateRandomText(descriptions);

 const markup = concreteMain(imagePath, description);
 insertTemplate(container, markup);
};
