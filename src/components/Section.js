export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
  }

  renderItems() {
    this._items.reverse().forEach((item) => this._renderer(item));
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
