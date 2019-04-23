import Profile from './profile-concreter';

export default (data, container) => {
  const profile = new Profile(data);

  container.appendChild(profile.render());
  return profile;
};
