import Filter from './container-concreter';

export default (container, data) => {
  const filter = new Filter(data);

  container.appendChild(filter.render());

  return filter;
};
