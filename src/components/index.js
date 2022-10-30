//Styles import
import '../pages/index.css';

//Module exports
import { initialCards } from './cards';
import { enableValidaton } from "./validate";

import {addCard} from "./utils";
import {appearCard} from "./utils";
import {closeModal} from "./modal";
import {openModal} from "./modal";
import {closePopup} from "./modal";
import {keyboardClosePopup} from "./modal";
import {likeOnButton} from './utils';
import {deleteOnButton} from './utils';

// Variable declarations
const popupEdit = document.querySelector('#popup_edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupNameInput = document.querySelector('#name_input');
const popupStatusInput = document.querySelector('#status_input');
const formUserElement = document.querySelector('.form__type_user');
const popupAdd = document.querySelector('#popup_add');
const formPlaceElement = document.querySelector('.form__type_place');
const $openPopupArr = Array.from(document.querySelectorAll('.popup-open'));
const modals = Array.from(document.querySelectorAll('.popup'));

// Popup edit submit 

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = popupNameInput.value;
  profileStatus.textContent = popupStatusInput.value;
  closeModal (popupEdit);
}

formUserElement.addEventListener('submit', formSubmitHandler);

// default cards creation
for (let i = 0; i < initialCards.length; i++) {
  appearCard(initialCards[i].name, initialCards[i].link);
}

// Add new card submit creation
function formPlaceSubmitHandler (evt) {
  evt.preventDefault(); 

  const popupPlaceNameInput = document.querySelector('#place_name_input');
  const popupImageLinkInput = document.querySelector('#image_link');

  appearCard (popupPlaceNameInput.value, popupImageLinkInput.value);

  formPlaceElement.reset();
  closeModal (popupAdd);
}

formPlaceElement.addEventListener('submit', formPlaceSubmitHandler);

// popup open function
$openPopupArr.forEach($openBtn => {
  const $currentPopup = document.getElementById($openBtn.dataset.popup);

  $openBtn.addEventListener('click', () => {
    openModal($currentPopup);

    if ($currentPopup.classList.contains('popup_type_edit')) {
      popupNameInput.value = profileName.textContent;
      popupStatusInput.value = profileStatus.textContent;
    }
  });
});

// popup close function
modals.forEach(closePopup);
modals.forEach(keyboardClosePopup);

//forms validation
enableValidaton();