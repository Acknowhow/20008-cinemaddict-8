export default (imagePath, description) => {
  return `
<img src="${imagePath}" alt="" class="film-card__poster">
<p class="film-card__description">${description}</p>
<button class="film-card__comments">13 comments</button>`;
}
