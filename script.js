// Pop-up open
const popup = document.querySelector('.popup');
      profileEditButton = document.querySelector('.profile__edit-button');
      popupCloseIcon = document.querySelector('.popup__close-icon');


profileEditButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

// Pop-up close
popupCloseIcon.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

// Popup default values
let profileName = document.querySelector('.profile__name');
    profileStatus = document.querySelector('.profile__status');
    popupNameInput = document.querySelector('#name_input');
    popupStatusInput = document.querySelector('#status_input');

popupNameInput.value = profileName.textContent;
popupStatusInput.value = profileStatus.textContent;

// Popup submit
const formElement = document.querySelector('.form');

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = popupNameInput.value;
  profileStatus.textContent = popupStatusInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

// Default six cards

const initialCards = [
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

const placeCardsList = document.querySelector('.elements__list');
const placeCardTemplate = document.querySelector('#placeCard').content;

for (i = 0; i < initialCards.length; i++) {
  let placeCardElement = placeCardTemplate.querySelector('.elements__item').cloneNode(true);
  placeCardElement.querySelector('.elements__image').src = initialCards[i].link;
  placeCardElement.querySelector('.elements__image').alt = initialCards[i].name;
  placeCardElement.querySelector('.elements__place').textContent = initialCards[i].name;
  placeCardsList.append(placeCardElement);
}

// Add new card

// Like button

// Delete button

// Image popup

// Smooth animation

          
