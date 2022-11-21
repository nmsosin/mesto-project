import { likeButtonSelector } from "../utils/constants";

export default class Card {
  constructor(
    data,
    templateSelector,
    userId,
    { handleCardClick, handleLikeClick, handleDeleteClick }
  ) {
    this._data = data;
    this._userId = userId;
    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._element = this._getElement();
    this._likeButton = this._element.querySelector(likeButtonSelector);
    this._deleteButton = this._element.querySelector(
      ".elements__delete-button"
    );
  }

  _getElement() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);
  }

  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._data)
    );
    this._likeButton.addEventListener("click", () =>
      this._handleLikeClick(this._isLikedByUser(), this._data._id)
    );
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClick(this._element, this._data._id)
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

    if (this._data.owner._id !== this._userId) {
      this._deleteButton.remove();
    }

    this.setupLike(this._data);

    this._setEventListeners();

    return this._element;
  }
}
