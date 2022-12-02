export let myId;

// Profile info
export const profileNameSelector = ".profile__name";
export const profileAboutSelector = ".profile__status";
export const profileAvatarSelector = ".profile__avatar";

// Buttons
export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const changeAvatarButton = document.querySelector(
  ".profile__avatar-wrapper"
);
export const likeButtonSelector = ".elements__like-button";

// Profile popup
export const formUserElement = document.querySelector(".form__type_user");
export const popupNameInput = document.querySelector("#name_input");
export const popupAboutInput = document.querySelector("#status_input");

// New card popup
export const formPlaceElement = document.querySelector(".form__type_place");
export const popupPlaceNameInput = document.querySelector("#place_name_input");
export const popupImageLinkInput = document.querySelector("#image_link");

// Avatar popup
export const formAvatarElement = document.querySelector(".form__type_avatar");
export const avatarLinkInput = document.querySelector("#avatar_link");

export const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

//api
export const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-16",
  headers: {
    authorization: "d199741e-6b2f-4eec-b579-eb256c9f973a",
    "Content-Type": "application/json",
  },
};
