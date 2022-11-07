//Variable declarations
const placeCardsList = document.querySelector('.elements__list');

//imports
import {addCard} from "./cards";

// Prepend cards markdown function
function prependCard (placeName, imageLink, likes, ownerId, myId, cardId) {
  const cardElement = addCard(placeName, imageLink, likes, ownerId, myId, cardId);
  placeCardsList.prepend(cardElement);
}

function updateProfileAppearance(name, status, result) {
  name.textContent = result.name;
  status.textContent = result.about;
};

function updateAvatar(image, result) {
  image.src = result.avatar;
}

//Render loading for submit
function renderLoading(currentSubmit, isLoading) {
  if (isLoading) {
    currentSubmit.value = 'Сохранение...';
    currentSubmit.classList.add('form__submit_is-loading');
  } else if (currentSubmit.classList.contains('form__submit_place')) {
    currentSubmit.value = 'Создать';
    currentSubmit.classList.remove('form__submit_is-loading');
  } else {
    currentSubmit.value = 'Сохранить';
    currentSubmit.classList.remove('form__submit_is-loading');
  }
}

//exports
export {prependCard, updateProfileAppearance, updateAvatar, renderLoading};
