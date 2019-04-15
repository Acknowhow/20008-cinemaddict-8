import Comment from './comment-concreter';

export default (card, container) => {
  const {comments} = card;
  const commentContainer = container.querySelector(
      `.film-details__comments-wrap`);

  const comment = new Comment(comments);

  commentContainer.appendChild(comment.render());
  return comment;
};
