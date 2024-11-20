import icons from '../../img/icons.svg';

class PaginationView {
  _parentEl = document.querySelector('.pagination');
  _data;

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (btn === null) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterBegin', markup);
  }
  _generateMarkup() {
    let currPage = this._data.page;
    let numPages = Math.ceil(
      this._data.search.results.length / this._data.recipePerPage
    );

    // first page , other pages too
    if (currPage == 1 && numPages > 1) {
      return `
          <button data-goto=${
            currPage + 1
          } class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}.svg#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    // last page
    if (currPage === numPages && numPages > 1) {
      return `
        <button data-goto=${
          currPage - 1
        } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>`;
    }
    // other page
    if (currPage < numPages && currPage !== 1) {
      return `<button data-goto=${
        currPage - 1
      } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
          <button data-goto=${
            currPage + 1
          } class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}.svg#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    // only 1 page
    if (currPage == 1 && numPages == 1) return '';
  }
}

export default new PaginationView();
