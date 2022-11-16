import { likeButtonSelector } from "../utils/constants";

export default class Card {
  constructor(
    data,
    templateSelector,
    userId,
    { handleCardClick, handleLikeClick }
  ) {
    this._data = data;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;

    this._element = this._getElement();
    this._likeButton = this._element.querySelector(likeButtonSelector);
  }

  _getElement() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", this._handleCardClick);
    this._likeButton.addEventListener("click", () =>
      this._handleLikeClick(this._isLikedByUser(), this._data._id)
    );
  }

  _isLikedByUser() {
    return this._data.likes.some((like) => like._id === this._userId);
  }

  setupLike(data) {
    this._data = data;
    this._element.querySelector(".elements__like-count").textContent =
      this._data.likes.length;

    if (this._isLikedByUser()) {
      this._likeButton.classList.add("elements__like-button_active");
    } else {
      this._likeButton.classList.remove("elements__like-button_active");
    }
  }

  generate() {
    this._cardImage = this._element.querySelector(".elements__image");
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;

    this._element.querySelector(".elements__place").textContent =
      this._data.name;

    // TODO: set like button state if user have been liked this card
    this.setupLike(this._data);

    this._setEventListeners();

    return this._element;
  }
}
