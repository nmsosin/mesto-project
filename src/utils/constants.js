export let myId;

// Profile info
export const profileNameSelector = ".profile__name";
export const profileAboutSelector = ".profile__status";
export const profileAvatarSelector = ".profile__avatar";

export const likeButtonSelector = ".elements__like-button";

// Profile popup
// export const popupEdit = document.querySelector("#popup_edit");
// export const avatarImage = document.querySelector(".profile__avatar");
export const popupNameInput = document.querySelector("#name_input");
export const popupAboutInput = document.querySelector("#status_input");
export const formUserElement = document.querySelector(".form__type_user");
export const formAvatarElement = document.querySelector(".form__type_avatar");
// export const popupAdd = document.querySelector("#popup_add");
export const formPlaceElement = document.querySelector(".form__type_place");
// export const modals = Array.from(document.querySelectorAll(".popup"));
export const popupPlaceNameInput = document.querySelector("#place_name_input");
export const popupImageLinkInput = document.querySelector("#image_link");
// export const editPopup = document.querySelector(".popup_type_edit");
/* use */ export const editButton = document.querySelector(
  ".profile__edit-button"
);
// export const avatarPopup = document.querySelector(".popup_type_change-avatar");
export const avatarLinkInput = document.querySelector("#avatar_link");
export const changeAvatarButton = document.querySelector(
  ".profile__avatar-wrapper"
);
// export const changeAvatarButton = document.querySelector(
//   ".profile__change-avatar"
// );

// export const addPopup = document.querySelector(".popup_type_add");
export const addButton = document.querySelector(".profile__add-button");

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

// const placeCardTemplate = document.querySelector("#placeCard").content;
// const popupFigure = document.querySelector("#popup_type_image-expand");
// const popupImage = popupFigure.querySelector(".popup__image");
// const popupCaption = popupFigure.querySelector(".popup__caption");
