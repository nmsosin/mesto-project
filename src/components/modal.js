// popup open function
function openModal (targetModal) {
  targetModal.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

// popup close function
function closePopup (currentPopup) {
  currentPopup.addEventListener('mousedown', function (evt) {
    if(evt.target.classList.contains('popup__close-icon')||evt.target.classList.contains('popup')) {
      closeModal(evt.currentTarget);
    } else {
      evt.stopPropagation();
    }
  });
  document.removeEventListener('keydown', closeByEsc);
}

function closeModal (targetModal) {
  targetModal.classList.remove('popup_opened');
}

function closeByEsc (evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeModal(openedPopup);
  }
}

//exports
export {openModal, closePopup, closeModal};
