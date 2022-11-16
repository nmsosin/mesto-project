//Variable declarations
const placeCardTemplate = document.querySelector("#placeCard").content;
const popupFigure = document.querySelector("#popup_type_image-expand");
const popupImage = popupFigure.querySelector(".popup__image");
const popupCaption = popupFigure.querySelector(".popup__caption");

// Creating cards function
import { openModal } from "./modal";

import { deleteCard, likeAdd, likeRemove } from "./api";

// Like button
function likeOnButton(currentCard, currentCardId, likes, myId) {
  const likeButton = currentCard.querySelector(".elements__like-button");
  const likesCount = currentCard.querySelector(".elements__like-count");

  //check my like
  if (
    likes.some((user) => {
      return user._id == myId;
    })
  ) {
    likeButton.classList.toggle("elements__like-button_active");
  }

  likeButton.addEventListener("click", function (evt) {
    if (
      likes.some((user) => {
        return user._id == myId;
      })
    ) {
      likeRemove(currentCardId)
        .then((result) => {
          evt.target.classList.remove("elements__like-button_active");
          likes = result.likes;
          likesCount.textContent = likes.length;
        })
        .catch((err) => {
          console.log(`Упс! Удалить лайк не удалось: ${err}`);
        });
    } else {
      likeAdd(currentCardId)
        .then((result) => {
          evt.target.classList.add("elements__like-button_active");
          likes = result.likes;
          likesCount.textContent = likes.length;
        })
        .catch((err) => {
          console.log(`Упс! Поставить лайк не удалось: ${err}`);
        });
    }
  });
}

// Delete button
function deleteOnButton(currentCard, currentCardId) {
  const deleteButton = currentCard.querySelector(".elements__delete-button");
  deleteButton.addEventListener("click", function (evt) {
    const listItem = evt.target.closest(".elements__item");
    deleteCard(currentCardId)
      .then((result) => {
        listItem.remove();
      })
      .catch((err) => {
        console.log(`Ой! Удалить карточку не удалось: ${err}`);
      });
  });
}

//Add card to markdown
function addCard(placeName, imgLink, likes, ownerId, myId, cardId) {
  const placeCardElement = placeCardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const placeNameElement = placeCardElement.querySelector(".elements__place");
  const placeImage = placeCardElement.querySelector(".elements__image");
  const likesCount = placeCardElement.querySelector(".elements__like-count");

  placeNameElement.textContent = placeName;
  placeImage.alt = placeName;
  placeImage.src = imgLink;
  likesCount.textContent = likes.length;

  likeOnButton(placeCardElement, cardId, likes, myId);

  //Deleting card
  const deleteButton = placeCardElement.querySelector(
    ".elements__delete-button"
  );
  if (ownerId !== myId) {
    deleteButton.remove();
  } else {
    deleteOnButton(placeCardElement, cardId);
  }

  placeImage.addEventListener("click", function expand(evt) {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupCaption.textContent = evt.target.alt;

    openModal(popupFigure);
  });

  return placeCardElement;
}

export { addCard };
