import Search from './search-concreter';

export default (container) => {
  const search = new Search();

  container.appendChild(search.render());

  return search;
};
