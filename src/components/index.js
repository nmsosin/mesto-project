//Styles import
import '../pages/index.css';

//Module exports
import { enableValidation } from "./validate";
import {appearCard} from "./utils";
import {updateProfileAppearance} from "./utils";
import {updateAvatar} from "./utils";
import {closeModal} from "./modal";
import {openModal} from "./modal";
import {closePopup} from "./modal";
import {toggleButtonState} from "./validate";

//import data from server
import {getInitialCards} from "./api";
import {getProfileInfo} from "./api";
import {updateProfileData} from "./api";
import {postNewCard} from "./api";
import {editAvatar} from "./api";


// Variable declarations
const popupEdit = document.querySelector('#popup_edit');
const avatarImage = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupNameInput = document.querySelector('#name_input');
const popupStatusInput = document.querySelector('#status_input');
const formUserElement = document.querySelector('.form__type_user');
const formAvatarElement = document.querySelector('.form__type_avatar');
const popupAdd = document.querySelector('#popup_add');
const formPlaceElement = document.querySelector('.form__type_place');
const modals = Array.from(document.querySelectorAll('.popup'));
const popupPlaceNameInput = document.querySelector('#place_name_input');
const popupImageLinkInput = document.querySelector('#image_link');
const editPopup = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');
const avatarPopup = document.querySelector('.popup_type_change-avatar');
const avatarLinkInput = document.querySelector('#avatar_link');
const changeAvatarButton = document.querySelector('.profile__change-avatar');
const addPopup = document.querySelector('.popup_type_add');
const addButton = document.querySelector('.profile__add-button');

const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

//Get profile && cards server data
Promise.all([getProfileInfo(), getInitialCards()])
  .then(([user, cards]) => {
    updateAvatar(avatarImage, user);
    updateProfileAppearance(profileName, profileStatus, user);
    const myId = user._id;
    renderAllCards(cards, myId);
  })
  .catch((err) => {
    console.log(`Запрос данных завершился ошибкой: ${err}`)
  });


//Change avatar submit
function handleAvatarSubmit (evt) {
  evt.preventDefault();
  editAvatar(avatarLinkInput.value)
    .then((result) => {
      updateAvatar(avatarImage, result);
      closeModal (avatarPopup);
    })
    .catch((err) => {
      console.log(`Ой! Аватар заменить не удалось: ${err}`);
    })

  updateAvatar(avatarImage, avatarLinkInput.value);
  closeModal (avatarPopup);
}

formAvatarElement.addEventListener('submit', handleAvatarSubmit);


// Popup edit submit 
function handleEditFormSubmit (evt) {
  evt.preventDefault();
  updateProfileData(popupNameInput.value, popupStatusInput.value)
    .then((result) => {
      updateProfileAppearance(profileName, profileStatus, result);
      closeModal (popupEdit);
    })
    .catch((err) => {
      console.log(`Ой! Персональные данные изменить не удалось: ${err}`);
    })
}

formUserElement.addEventListener('submit', handleEditFormSubmit);


// initial cards creation
function renderAllCards(result, myId) {
  for (let i = result.length - 1; i >= 0; i--) {
    appearCard(result[i].name, result[i].link, result[i].likes, result[i].owner._id, myId, result[i]._id);
  };
};


// Add new card submit creation
function handleFormPlaceSubmit (evt) {
  evt.preventDefault();
  Promise.all([postNewCard(popupPlaceNameInput.value, popupImageLinkInput.value), getProfileInfo()])
    .then(([result, user]) => {
      const myId = user._id;
      appearCard (result.name, result.link, result.likes, result.owner._id, myId, result._id);
      console.log(result);
      formPlaceElement.reset();

      const inputList = Array.from(formPlaceElement.querySelectorAll('.form__input'));
      toggleButtonState(settings, inputList, evt.target.querySelector('.form__submit'));
      closeModal (popupAdd);
    })
    .catch((err) => {
      console.log(`Ой! Добавить новую карточку не удалось: ${err}`);
    })
}

formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);

// popup open function
function openEditPopup (openBtn) {
  openBtn.addEventListener('click', () => {
    openModal(editPopup);
  popupNameInput.value = profileName.textContent;
  popupStatusInput.value = profileStatus.textContent;
  });
};

openEditPopup(editButton);

function changeAvatarPopup (openBtn) {
  openBtn.addEventListener('click', () => {
    openModal(avatarPopup);
  });
};

changeAvatarPopup(changeAvatarButton);

function openAddPopup (openBtn) {
  openBtn.addEventListener('click', () => {
    openModal(addPopup);
  });
};

openAddPopup(addButton);

// popup close function
modals.forEach(closePopup);

//forms validation

enableValidation(settings);