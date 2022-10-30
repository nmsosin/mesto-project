// popup open function
function openModal (targetModal) {
  targetModal.classList.add('popup_opened');
}

export {openModal};

// popup close function
function closePopup (currentPopup) {
  currentPopup.addEventListener('mousedown', function (evt) {
    const $targetPopup = evt.target.closest('.popup');
    if(evt.target.classList.contains('popup__close-icon')||evt.target.classList.contains('popup')) {
      closeModal($targetPopup);
    } else {
      evt.stopPropagation();
    }
  });
}

export {closePopup};

function closeModal (targetModal) {
  targetModal.classList.remove('popup_opened');
}

export {closeModal};

function keyboardClosePopup (currentPopup) {
  currentPopup.addEventListener('keydown', function (evt) {
    console.log(evt.key);
    console.log(currentPopup);
    if(evt.key == 'Escape') {
      closeModal(currentPopup);
    }
  })
}

export {keyboardClosePopup};