import concreteControl from './control-concreter';
import {insertTemplate} from '../../../assets/handler';

export default (container) => {
  const markup = concreteControl();

  insertTemplate(container, markup);
};
