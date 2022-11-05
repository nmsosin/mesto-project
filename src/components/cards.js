

// Variable declarations
import {getInitialCards, getProfileInfo} from "./api";

const placeCardTemplate = document.querySelector('#placeCard').content;

export const initialCards = [
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
import {likeOnButton} from './utils';
import {deleteOnButton} from './utils';

function addCard (placeName, imgLink, likes, ownerId, myId, cardId) {
  const placeCardElement = placeCardTemplate.querySelector('.elements__item').cloneNode(true);
  const placeNameElement = placeCardElement.querySelector('.elements__place');
  const placeImage = placeCardElement.querySelector('.elements__image');
  const likesCount = placeCardElement.querySelector('.elements__like-count');

  placeNameElement.textContent = placeName;
  placeImage.alt = placeName;
  placeImage.src = imgLink;
  likesCount.textContent = likes.length;

  likeOnButton (placeCardElement);
  deleteOnButton (placeCardElement);

  placeImage.addEventListener('click', function expand (evt) {
    const popupFigure = document.querySelector('#popup_type_image-expand');
    const popupImage = popupFigure.querySelector('.popup__image');
    const popupCaption = popupFigure.querySelector('.popup__caption');

    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupCaption.textContent = evt.target.alt;

    openModal(popupFigure);
  });

  return placeCardElement;
}

export {addCard};