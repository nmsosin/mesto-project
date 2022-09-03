// Variable declarations
const popupEdit = document.querySelector('#popup_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupNameInput = document.querySelector('#name_input');
const popupStatusInput = document.querySelector('#status_input');

const formUserElement = document.querySelector('.form__type_user');

const placeCardsList = document.querySelector('.elements__list');
const placeCardTemplate = document.querySelector('#placeCard').content;

const popupAdd = document.querySelector('#popup_add');

const formPlaceElement = document.querySelector('.form__type_place');

// const imageOnClick = document.querySelectorAll('.elements__image');
const popupFigure = document.querySelector('#popup_type_image-expand');
const popupImage = popupFigure.querySelector('.popup__image');
const popupCaption = popupFigure.querySelector('.popup__caption');

const $openPopupArr = Array.from(document.querySelectorAll('.popup-open'));
const closeIconsArr = Array.from(document.querySelectorAll('.popup__close-icon'));

// Popup edit submit 


function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = popupNameInput.value;
  profileStatus.textContent = popupStatusInput.value;
  popupEdit.classList.remove('popup_opened');
}

formUserElement.addEventListener('submit', formSubmitHandler);

// Creating cards function
function addCard (cardName, imgLink) {
  const placeCardElement = placeCardTemplate.querySelector('.elements__item').cloneNode(true);
  const placeName = placeCardElement.querySelector('.elements__place');
  const placeImage = placeCardElement.querySelector('.elements__image');

  placeName.textContent = cardName;
  placeImage.alt = cardName;
  placeImage.src = imgLink;

  likeOnButton (placeCardElement);
  deleteOnButton (placeCardElement);

  placeCardsList.prepend(placeCardElement);
  

  placeImage.addEventListener('click', function expand (evt) {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupCaption.textContent = evt.target.alt;

    popupFigure.classList.add('popup_opened');
  });

}

// default cards creation
for (i = 0; i < initialCards.length; i++) {
  addCard(initialCards.reverse()[i].name, initialCards.reverse()[i].link);

}

// Add new card submit creation
function formPlaceSubmitHandler (evt) {
  evt.preventDefault(); 

  let popupPlaceNameInput = document.querySelector('#place_name_input');
  let popupImageLinkInput = document.querySelector('#image_link');

  addCard(popupPlaceNameInput.value, popupImageLinkInput.value);

  formPlaceElement.reset();

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


// popup open function
$openPopupArr.forEach($openBtn => {
  const $currentPopup = document.getElementById($openBtn.dataset.popup);

  $openBtn.addEventListener('click', () => {
    $currentPopup.classList.add('popup_opened');

    if ($currentPopup.classList.contains('popup_type_edit')) {
      popupNameInput.value = profileName.textContent;
      popupStatusInput.value = profileStatus.textContent;
    }

  });
});


// popup close function
function closePopup (currentPopup) {
  currentPopup.addEventListener('click', function (evt) {
    evt.target.closest('.popup').classList.remove('popup_opened');
  });
}

closeIconsArr.forEach(closePopup);