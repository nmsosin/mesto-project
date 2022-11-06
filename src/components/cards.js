// Variable declarations
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