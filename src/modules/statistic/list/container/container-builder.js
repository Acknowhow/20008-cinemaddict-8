import List from './container-concreter';

export default (container, data) => {
  const {
    totalCount,
    hoursDuration,
    minutesDuration, genre} = data;

  const list = new List({
    totalCount, hoursDuration, minutesDuration, genre});

  container.appendChild(list.render());

  return list;
}
