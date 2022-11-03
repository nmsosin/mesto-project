//imports
import {addCard} from "./cards";

// Appear cards markdown function
function appearCard (cardName, imageLink) {
  const cardElement = addCard(cardName, imageLink);
  const placeCardsList = document.querySelector('.elements__list');
  placeCardsList.prepend(cardElement);
}

//exports
export {appearCard};
