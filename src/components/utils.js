//imports
import {addCard} from "./cards";

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

// Appear cards markdown function
function appearCard (cardName, imageLink) {
  const cardElement = addCard(cardName, imageLink);
  const placeCardsList = document.querySelector('.elements__list');
  placeCardsList.prepend(cardElement);
}

//exports
export {likeOnButton};
export {deleteOnButton};
export {appearCard};
