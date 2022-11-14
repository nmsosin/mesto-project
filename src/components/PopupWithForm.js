import { settings } from "../utils/constants";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(settings.formSelector);
    this._inputList = this._form.querySelectorAll(settings.inputSelector);
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', formSubmit);
  }

  _getInputValues() {
    const values = {};

    this._inputList.forEach(input => {
      this._values[input.name] = input.value;
    })
  }

  setInputValues(values) {
    this._inputList.forEach(input => {
      input.value = values[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}