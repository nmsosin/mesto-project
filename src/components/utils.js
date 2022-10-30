// Like button
function likeOnButton (currentCard) {
  currentCard.querySelector('.elements__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });
};

export {likeOnButton};

// Delete button
function deleteOnButton (currentCard) {
  currentCard.querySelector('.elements__delete-button').addEventListener('click', function (evt) {
    let listItem = evt.target.closest('.elements__item');
    listItem.remove();
  });
};

export {deleteOnButton};

// Creating cards function
import {openModal} from "./modal";

function addCard (cardName, imgLink) {
  const placeCardTemplate = document.querySelector('#placeCard').content;
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

function appearCard (cardName, imageLink) {
  const cardElement = addCard(cardName, imageLink);
  const placeCardsList = document.querySelector('.elements__list');
  placeCardsList.prepend(cardElement);
}

export {appearCard};
