export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getElement() {
    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.elements__item')
    .cloneNode(true);
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);
  }

  generate() {
    this._element = this._getElement();

    this._cardImage = this._element.querySelector('.elements__image');
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;

     this._element.querySelector('.elements__place').textContent = this._data.name; 

    this._element.querySelector('.elements__like-count').textContent = this._data.likes.length;

    // TODO: set like button state if user have been liked this card

    this._setEventListeners();

    return this._element;
  }
}