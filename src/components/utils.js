//imports
import {addCard} from "./cards";
import {deleteCard} from "./api";
import {likeAdd} from "./api";
import {likeRemove} from "./api";

// Like button

// function checkMyLike (currentCard, currentCardId, likes, myId) {
//   // const likeButton = currentCard.querySelector('.elements__like-button');
//  return likes.some((user) => {return user._id == myId});
// }

function likeOnButton (currentCard, currentCardId, likes, myId) {
  const likeButton = currentCard.querySelector('.elements__like-button');
  const likesCount = currentCard.querySelector('.elements__like-count');
  //check my like
  if (likes.some((user) => {return user._id == myId})) {
    likeButton.classList.toggle('elements__like-button_active');
  }

  likeButton.addEventListener('click', function (evt) {
    // evt.target.classList.toggle('elements__like-button_active');

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
  placeCardsList.append(cardElement);
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

