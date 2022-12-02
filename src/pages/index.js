//Styles import
import "./index.css";

//Import constants from utils
import * as constants from "../utils/constants";

import Api from "../components/Api";
import Card from "../components/Card";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import FormValidator from "../components/FormValidator";

let section;
const api = new Api(constants.config);
const userInfo = new UserInfo({
  nameSelector: constants.profileNameSelector,
  aboutSelector: constants.profileAboutSelector,
  avatarSelector: constants.profileAvatarSelector,
});



// Popups
const profilePopup = new PopupWithForm("#popup_edit", handleEditFormSubmit);
const imageExpandPopup = new PopupWithImage(".popup_type_image-expand");
const avatarPopup = new PopupWithForm("#popup_avatar", handleChangeAvatarSubmit);
const newCardPopup = new PopupWithForm("#popup_add", handleAddFormSubmit);

// Form validators
const profileFormValidator = new FormValidator(constants.settings, constants.formUserElement);
const newCardFormValidator = new FormValidator(constants.settings, constants.formPlaceElement);
const avatarFormValidator = new FormValidator(constants.settings, constants.formAvatarElement);



const createCard = (item) => {
  const card = new Card(item, "#placeCard", userInfo.userId, {
    handleLikeClick: (isLikedByUser, cardId) => {
      if (isLikedByUser) {
        api
          .likeRemove(cardId)
          .then((data) => card.setupLike(data))
          .catch((err) => console.warn(err));
      } else {
        api
          .likeAdd(cardId)
          .then((data) => card.setupLike(data))
          .catch((err) => console.warn(err));
      }
    },

    handleCardClick: (data) => {
      imageExpandPopup.open(data);
    },

    handleDeleteClick: (cardElement, cardId) => {
      api
        .deleteCard(cardId)
        .then(() => card.removeCard())
        .catch((err) => console.warn(err));
    },
  });
  const cardElement = card.generate();
  return cardElement;
};

// Popup edit submit
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  const data = profilePopup._getInputValues();
  profilePopup.renderLoading(true);
  api
    .updateProfileData(data)
    .then((result) => {
      userInfo.setUserInfo(result);
      profilePopup.close();
    })
    .catch((err) => {
      console.log(`Ой! Персональные данные изменить не удалось: ${err}`);
    })
    .finally(() => {
      setTimeout(
        () => profilePopup.renderLoading(false),
        1000,
        evt.submitter,
        false
      );
    });
}

// Add card submit
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const data = newCardPopup._getInputValues();
  newCardPopup.renderLoading(true, "Создание...");
  api
    .postNewCard(
      data
    )
    .then((data) => {
      const cardElement = createCard(data);
      section.addItem(cardElement);
      newCardPopup.close();
    })
    .catch((err) => console.warn(err))
    .finally(() => {
      setTimeout(() => newCardPopup.renderLoading(false), 1000);
    });
}

// Change avatar submit
function handleChangeAvatarSubmit(evt) {
  evt.preventDefault();
  const data = avatarPopup._getInputValues();
  avatarPopup.renderLoading(true);
  api
    .editAvatar(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      avatarPopup.close();
    })
    .catch((err) => console.warn(err))
    .finally(() => {
      setTimeout(() => avatarPopup.renderLoading(false), 1000);
    });
}



// Event listeners
constants.changeAvatarButton.addEventListener("click", () => avatarPopup.open());
constants.addButton.addEventListener("click", () => newCardPopup.open());
constants.editButton.addEventListener("click", () => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profileFormValidator.toggleButtonState();
  profilePopup.open();
});



//Get profile && cards server data
Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    section = new Section(
      {
        items: cards,
        renderer: (item) => {
          const cardElement = createCard(item);
          section.addItem(cardElement);
        },
      },
      ".elements__list"
    );

    section.renderItems();
  })
  .catch((err) => {
    console.log(`Запрос данных завершился ошибкой: ${err}`);
  });


// Set event listeners for popups
profilePopup.setEventListeners();
imageExpandPopup.setEventListeners();
newCardPopup.setEventListeners();
avatarPopup.setEventListeners();


// Enable forms validation
profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
