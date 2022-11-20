export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }

  _showInputError = (inputElement, errorMessage) => {
    const formError = this._formElement.querySelector(
      `.${inputElement.id}_error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._settings.errorClass);
  };

  _hideInputError = (inputElement) => {
    const formError = this._formElement.querySelector(
      `.${inputElement.id}_error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    formError.classList.remove(this._settings.errorClass);
    formError.textContent = "";
  };

  _hideAllInputsError = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  _isValid = (inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
    } else {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    }
  };

  _setEventListeners = () => {
    this.toggleButtonState();

    this._formElement.addEventListener("reset", () => {
      setTimeout(() => {
        this._hideAllInputsError();
        this.toggleButtonState();
      }, 0);
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
}
