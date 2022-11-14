export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
  }

  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }

  addItem(item) {
    // TODO: choose one variant
    //document.querySelector(this._containerSelector).prepend(item);
    this._container.prepend(item);
  }
}