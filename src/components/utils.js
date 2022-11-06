//imports
import {addCard} from "./cards";
import {deleteCard, likeAdd, likeRemove} from "./api";

// Like button
function likeOnButton (currentCard, currentCardId, likes, myId) {
  const likeButton = currentCard.querySelector('.elements__like-button');
  const likesCount = currentCard.querySelector('.elements__like-count');

  //check my like
  if (likes.some((user) => {return user._id == myId})) {
    likeButton.classList.toggle('elements__like-button_active');
  }

  likeButton.addEventListener('click', function (evt) {

    if (likes.some((user) => {return user._id == myId})) {
      likeRemove (currentCardId)
        .then((result) => {
          evt.target.classList.remove('elements__like-button_active');
          likes = result.likes;
          likesCount.textContent = likes.length;
        })
        .catch((err) => {
          console.log(`Упс! Удалить лайк не удалось: ${err}`)
        });

    } else {
      likeAdd (currentCardId)
        .then((result) => {
          evt.target.classList.add('elements__like-button_active');
          likes = result.likes;
          likesCount.textContent = likes.length;
        })
        .catch((err) => {
          console.log(`Упс! Поставить лайк не удалось: ${err}`)
        });
    }
  });
};

// Delete button
function deleteOnButton (currentCard, currentCardId) {
  const deleteButton = currentCard.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', function (evt) {

    let listItem = evt.target.closest('.elements__item');
    deleteCard(currentCardId)
      .then((result) => {
        console.log(result);
      });
    listItem.remove();
  });
};

// Appear cards markdown function
function appearCard (placeName, imageLink, likes, ownerId, myId, cardId) {
  const cardElement = addCard(placeName, imageLink, likes, ownerId, myId, cardId);
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

//Render loading for submit
function renderLoading(currentSubmit, isLoading) {
  if (isLoading) {
    currentSubmit.textContent = 'Сохранение...';
    currentSubmit.classList.add('form__submit_is-loading');
    console.log(currentSubmit.textContent);
  } else {
    currentSubmit.textContent = currentSubmit.value;
    currentSubmit.classList.remove('form__submit_is-loading');
    console.log(currentSubmit.textContent);
  }
}

//exports
export {likeOnButton, deleteOnButton, appearCard, updateProfileAppearance, updateAvatar, renderLoading};