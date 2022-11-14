//Styles import
import "../pages/index.css";

//Module imports
// import { enableValidation, toggleButtonState} from "./validate";
// import {prependCard, updateProfileAppearance, updateAvatar, renderLoading} from "./utils";
// import {openModal, closeModal, closePopup} from "./modal";

// //import data from server
// import {getInitialCards, getProfileInfo, updateProfileData, postNewCard, editAvatar} from "./api";

//Import constants from utils
import * as constants from "../utils/constants";

import Api from "./Api";
import Card from "./Card";
import Section from "./Section";
import UserInfo from "./UserInfo";

const api = new Api(constants.config);
const userInfo = new UserInfo({
  nameSelector: constants.profileNameSelector,
  aboutSelector: constants.profileStatusSelector,
  avatarSelector: constants.profileAvatarSelector,
});
//Get profile && cards server data
Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);

    const section = new Section(
      {
        items: cards,
        renderer: (item) => {
          const card = new Card(item, "#placeCard", () => {});
          const cardElement = card.generate();
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

//Change avatar submit
// function handleAvatarSubmit (evt) {
//   evt.preventDefault();
//   renderLoading(evt.submitter, true);
//   editAvatar(avatarLinkInput.value)
//     .then((result) => {
//       closeModal (avatarPopup);
//       updateAvatar(avatarImage, result);
//       formAvatarElement.reset();
//     })
//     .catch((err) => {
//       console.log(`Ой! Аватар заменить не удалось: ${err}`);
//     })
//     .finally(() => {
//       setTimeout(renderLoading, 1000, evt.submitter, false);
//       })
// }

// formAvatarElement.addEventListener('submit', handleAvatarSubmit);

// // Popup edit submit
// function handleEditFormSubmit (evt) {
//   evt.preventDefault();
//   renderLoading(evt.submitter, true);
//   updateProfileData(popupNameInput.value, popupStatusInput.value)
//     .then((result) => {
//       updateProfileAppearance(profileName, profileStatus, result);
//       closeModal (popupEdit);
//     })
//     .catch((err) => {
//       console.log(`Ой! Персональные данные изменить не удалось: ${err}`);
//     })
//     .finally(() => {
//       setTimeout(renderLoading, 1000, evt.submitter, false);
//     })
// }

// formUserElement.addEventListener('submit', handleEditFormSubmit);

// // initial cards creation
// function renderAllCards(result, myId) {
//   result.slice().reverse().forEach((obj) => prependCard(obj.name, obj.link, obj.likes, obj.owner._id, myId, obj._id));
// };

// // Add new card submit creation
// function handleFormPlaceSubmit (evt) {
//   evt.preventDefault();
//   renderLoading(evt.submitter, true);
//   postNewCard(popupPlaceNameInput.value, popupImageLinkInput.value)
//     .then((result) => {
//       prependCard (result.name, result.link, result.likes, result.owner._id, myId, result._id);
//       formPlaceElement.reset();

//       closeModal (popupAdd);
//     })
//     .catch((err) => {
//       console.log(`Ой! Добавить новую карточку не удалось: ${err}`);
//     })
//     .finally(() => {
//       setTimeout(renderLoading, 1000, evt.submitter, false);
//     })
// }

// formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);

// // popup open function
// function openEditPopup (openBtn) {
//   openBtn.addEventListener('click', () => {
//     openModal(editPopup);
//     popupNameInput.value = profileName.textContent;
//     popupStatusInput.value = profileStatus.textContent;
//   });
// };

// openEditPopup(editButton);

// function changeAvatarPopup (openBtn) {
//   openBtn.addEventListener('click', () => {
//     openModal(avatarPopup);
//   });
// };

// changeAvatarPopup(changeAvatarButton);

// function openAddPopup (openBtn) {
//   openBtn.addEventListener('click', () => {
//     openModal(addPopup);
//   });
// };

// openAddPopup(addButton);

// // popup close function
// modals.forEach(closePopup);

// //forms validation
// enableValidation(settings);
