export default (filterParams) => {
  const caption = filterParams.caption;
  const captionToLowerCase = caption.toLowerCase();
  const captionFirstLetterToUpperCase =
    caption.charAt(0).toUpperCase() + caption.slice(1);

  const amount = filterParams.amount;
  const state = filterParams.state;

  return `
<a href="#${captionToLowerCase}" 
class="main-navigation__item main-navigation__item${state ? `&#45;&#45;${state}` : ``}">
${captionFirstLetterToUpperCase} ${amount ? `<span class="main-navigation__item-count">${amount}</span>` : ``}
</a>`;

};
