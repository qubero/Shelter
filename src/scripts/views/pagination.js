import Abstract from "./abstract.js";

const createPaginationTemplate = (paginationInfo) => {
  const {
    currentPage,
    pagesCount
  } = paginationInfo;

  const isLeftDisabled = currentPage === 0 ? 'disabled' : '';
  const isPrevDisabled = isLeftDisabled;

  const isRightDisabled = currentPage === pagesCount - 1 ? 'disabled' : '';
  const isNextDisabled = isRightDisabled;

  return (
    `<div class="pets-list__controls">
      <button ${isPrevDisabled} class="button button--outline button--round btn-first">
          &lt;&lt;
      </button>
      <button ${isLeftDisabled} class="button button--outline button--round btn-prev">
          &lt;
      </button>
      <button class="button button--outline button--round active">
        ${currentPage + 1}
      </button>
      <button ${isRightDisabled} class="button button--outline button--round btn-next">
          &gt;
      </button>
      <button ${isNextDisabled} class="button button--outline button--round btn-last">
          &gt;&gt;
      </button>
    </div>`
  );
};

export default class Pagination extends Abstract {
  constructor() {
    super();
    this._data = {
      currentPage: null,
      pagesCount: null,
    };
  }

  init(currentPage, pagesCount) {
    this._data = {
      currentPage,
      pagesCount
    };
  }

  getTemplate() {
    return createPaginationTemplate(this._data);
  }
}
