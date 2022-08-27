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
          
