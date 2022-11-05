//imports
import {addCard} from "./cards";
import {deleteCard} from "./api";

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
function appearCard (placeName, imageLink, likes, ownerId, cardId) {
  const cardElement = addCard(placeName, imageLink, likes, ownerId, cardId);
  const placeCardsList = document.querySelector('.elements__list');
  placeCardsList.prepend(cardElement);
}

function updateProfileAppearance(name, status, result) {
  name.textContent = result.name;
  status.textContent = result.about;
};

function updateAvatar(image, result) {
  image.src = result.avatar;
}

//exports
export {likeOnButton};
export {deleteOnButton};
export {appearCard};
export {updateProfileAppearance};
export {updateAvatar};

