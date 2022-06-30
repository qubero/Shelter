import Abstract from "./abstract.js";

const createModalTemplate = (content) => {
  const url = require('../../images/icons/icon-close.png');

  return (
    `<div class="overlay is-visible">
      <div class="popup">
        <div class="popup__container">
          <button class="popup__close button button--outline button--round">
            <img class="icon" width="12" height="12" src="${url}" alt="">
          </button>

          <div class="popup__content">
            ${content}
          </div>
        </div>
      </div>
    </div>`
  );
};

export default class Modal extends Abstract {
  constructor(data = 'Somedata') {
    super();
    this._content = data;
    this._currentScrollY = 0;
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this.getElement().addEventListener(`click`, this._handleCloseClick);
  }

  getTemplate() {
    this._currentScrollY = window.pageYOffset;
    document.body.classList.add('fixed');
    document.body.style.marginTop = `-${this._currentScrollY}px`;
    return createModalTemplate(this._content.outerHTML);
  }

  _handleCloseClick(evt) {
    evt.preventDefault();
    const cList = evt.target.classList;

    if (cList.contains('overlay') || cList.contains('popup__close') || cList.contains('icon')) {
      this.getElement().remove();

      document.body.classList.remove('fixed');
      document.body.style.marginTop = `0`;
      window.scrollTo({
        top: this._currentScrollY,
        behavior: `instant`
      });
      this._currentScrollY = 0;
    }
  }
}
