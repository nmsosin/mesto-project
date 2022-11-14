import Popup from './Popup';
import {placeImageSelector, placeNameSelector} from '../utils/constants';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(placeImageSelector);
    this._heading = this._popup.querySelector(placeNameSelector);
  }

  open({ name, link }) {
    super.open();

    this._image.src = link;
    this._image.alt = name;
    this._heading.textContent = name;
  }
}