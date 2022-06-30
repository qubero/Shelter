import { createElement } from "../utils/render.js";

export default class Abstract {
  constructor() {
    if (new.target instanceof Abstract) {
      throw new Error(`Cant't intantiate Abstract, only concrete one.`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract's method not implemented: getTemplate.`);
  }

  getElement() {
      if (!this._element) {
          this._element = createElement(this.getTemplate());
      }

      return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
