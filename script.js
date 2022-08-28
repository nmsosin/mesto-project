// Pop-up open
const popup = document.querySelector('#popup_edit');
      profileEditButton = document.querySelector('.profile__edit-button');
      addButton = document.querySelector('.profile__add-button');

profileEditButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

// Popup close
const popupCloseIcon = document.querySelector('.popup__close-icon');
popupCloseIcon.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

// Popup edit default values
let profileName = document.querySelector('.profile__name');
    profileStatus = document.querySelector('.profile__status');
    popupNameInput = document.querySelector('#name_input');
    popupStatusInput = document.querySelector('#status_input');

popupNameInput.value = profileName.textContent;
popupStatusInput.value = profileStatus.textContent;

// Popup edit submit
const formUserElement = document.querySelector('.form_user');

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = popupNameInput.value;
  profileStatus.textContent = popupStatusInput.value;
  popup.classList.remove('popup_opened');
}

formUserElement.addEventListener('submit', formSubmitHandler);

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

  likeOnButton (placeCardElement);
  deleteOnButton (placeCardElement);

  placeCardsList.append(placeCardElement);
}

// Add new card popup
const popupAdd = document.querySelector('#popup_add');
      popupAddCloseIcon = document.querySelector('.popup__close-icon_add');

addButton.addEventListener('click', function () {
  popupAdd.classList.add('popup_opened');
});

popupAddCloseIcon.addEventListener('click', function () {
  popupAdd.classList.remove('popup_opened');
});

// Add new card submit
const formPlaceElement = document.querySelector('.form_place');

function formPlaceSubmitHandler (evt) {
  evt.preventDefault(); 

  let placeCardElement = placeCardTemplate.querySelector('.elements__item').cloneNode(true);
      placeName = placeCardElement.querySelector('.elements__place');
      placeImage = placeCardElement.querySelector('.elements__image');
      popupPlaceNameInput = document.querySelector('#place_name_input');
      popupImageLinkInput = document.querySelector('#image_link');

  placeName.textContent = popupPlaceNameInput.value;
  placeImage.src = popupImageLinkInput.value;
  placeImage.alt = popupPlaceNameInput.value;

  likeOnButton (placeCardElement);
  deleteOnButton (placeCardElement);

  placeCardsList.prepend(placeCardElement);

  popupAdd.classList.remove('popup_opened');
}

formPlaceElement.addEventListener('submit', formPlaceSubmitHandler);

// Like button
function likeOnButton (currentCard) {
    currentCard.querySelector('.elements__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });
}

// Delete button
function deleteOnButton (currentCard) {
    currentCard.querySelector('.elements__delete-button').addEventListener('click', function (evt) {
    let listItem = evt.target.closest('.elements__item');
    listItem.remove();
  });
}

// Image popup
const imageOnClick = document.querySelectorAll('.elements__image');
      popupFigure = document.querySelector('#popup_figure');
      popupImage = popupFigure.querySelector('.popup__image');
      popupCaption = popupFigure.querySelector('.popup__caption');
      popupFigureCloseIcon = document.querySelector('.popup__close-icon_figure');

popupFigureCloseIcon.addEventListener('click', function () {
  popupFigure.classList.remove('popup_opened');
});


for (i = 0; i < imageOnClick.length; i++) {
  imageOnClick[i].addEventListener('click', function Expand (evt) {
  popupImage.src = evt.target.src;
  popupCaption.textContent = evt.target.alt;
  popupFigure.classList.add('popup_opened');
});
}


// Smooth animation

          
