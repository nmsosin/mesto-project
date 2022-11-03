// Variable declarations
const placeCardTemplate = document.querySelector('#placeCard').content;
const popupFigure = document.querySelector('#popup_type_image-expand');
const popupImage = popupFigure.querySelector('.popup__image');
const popupCaption = popupFigure.querySelector('.popup__caption');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

// Creating cards function
import {openModal} from "./modal";

// Like button
function likeOnButton (currentCard) {
  currentCard.querySelector('.elements__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });
};

// Delete button
function deleteOnButton (currentCard) {
  currentCard.querySelector('.elements__delete-button').addEventListener('click', function (evt) {
    let listItem = evt.target.closest('.elements__item');
    listItem.remove();
  });
};

//Add cards function
function addCard (cardName, imgLink) {
  const placeCardElement = placeCardTemplate.querySelector('.elements__item').cloneNode(true);
  const placeName = placeCardElement.querySelector('.elements__place');
  const placeImage = placeCardElement.querySelector('.elements__image');

  placeName.textContent = cardName;
  placeImage.alt = cardName;
  placeImage.src = imgLink;

  likeOnButton (placeCardElement);
  deleteOnButton (placeCardElement);

  placeImage.addEventListener('click', function expand (evt) {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupCaption.textContent = evt.target.alt;

    openModal(popupFigure);
  });

  return placeCardElement;
}

//exports
export {initialCards};
export {addCard};