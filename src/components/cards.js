//Variable declarations
const placeCardTemplate = document.querySelector('#placeCard').content;

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

  likeOnButton (placeCardElement, cardId, likes, myId);


  //Deleting card
  const deleteButton = placeCardElement.querySelector('.elements__delete-button');
  if(ownerId !== myId) {
    deleteButton.remove();
  } else {
    deleteOnButton(placeCardElement, cardId);
  };

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