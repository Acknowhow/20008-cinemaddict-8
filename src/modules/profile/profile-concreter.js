import Component from '../../assets/concreter';

export default class Container extends Component {
  constructor(profile) {
    super();

    this._profile = profile;
  }

  get template() {
    return `
      <p class="profile__rating">${this._getProfile()}</p>>`;
  }

  update(data) {
    this._profile = data;
    this._updateProfile();
  }

  _updateProfile() {
    this._element.innerHTML = this._profile;
  }

  _getProfile() {
    return this._profile.charAt(0).toUpperCase() + this._profile.slice(1);
  }

}
