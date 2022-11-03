//Styles import
import '../pages/index.css';

//Module exports
import { initialCards } from './cards';
import { enableValidation } from "./validate";
import {appearCard} from "./utils";
import {closeModal} from "./modal";
import {openModal} from "./modal";
import {closePopup} from "./modal";
import {toggleButtonState} from "./validate";


// Variable declarations
const popupEdit = document.querySelector('#popup_edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupNameInput = document.querySelector('#name_input');
const popupStatusInput = document.querySelector('#status_input');
const formUserElement = document.querySelector('.form__type_user');
const popupAdd = document.querySelector('#popup_add');
const formPlaceElement = document.querySelector('.form__type_place');
const modals = Array.from(document.querySelectorAll('.popup'));
const popupPlaceNameInput = document.querySelector('#place_name_input');
const popupImageLinkInput = document.querySelector('#image_link');
const editPopup = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');
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

// Popup edit submit 

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = popupNameInput.value;
  profileStatus.textContent = popupStatusInput.value;
  closeModal (popupEdit);
}

formUserElement.addEventListener('submit', handleFormSubmit);

// default cards creation
for (let i = 0; i < initialCards.length; i++) {
  appearCard(initialCards[i].name, initialCards[i].link);
}

// Add new card submit creation
function handleFormPlaceSubmit (evt) {
  evt.preventDefault(); 

  appearCard (popupPlaceNameInput.value, popupImageLinkInput.value);

  formPlaceElement.reset();

  const inputList = Array.from(formPlaceElement.querySelectorAll('.form__input'));
  toggleButtonState(settings, inputList, evt.submitter);
  closeModal (popupAdd);
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