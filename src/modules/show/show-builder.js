import Show from './show-concreter';

export default (container) => {
  const show = new Show();

  container.appendChild(show.render());

  return show;
};
