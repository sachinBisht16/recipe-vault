import icons from '../../img/icons.svg';
import { Fraction } from 'fractional';

class RecipeView {
  _parentEl = document.querySelector('.recipe');
  _data;

  addHandler(handler) {
    ['load', 'hashchange'].map(ev => {
      window.addEventListener(ev, handler);
    });
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    return `
    <figure class="recipe__fig">
      <img src=${this._data.image_url} alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this._data.cooking_time
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this._data.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings">
            <svg>
              <use href="${icons}.svg#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings">
            <svg>
              <use href="${icons}.svg#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
      </div>
      <button class="btn--round bookmark">
        <svg class="">
          <use href="${icons}.svg#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._generateIngredientsMarkup).join(' ')}
      </ul>
    </div>
`;
  }

  _generateIngredientsMarkup(incredient) {
    return `
          <li class="recipe__ingredient">
              <svg class="recipe__icon">
                 <use href="${icons}#icon-check"></use>
               </svg>
               <div class="recipe__quantity">${
                 incredient.quantity
                   ? new Fraction(incredient.quantity).toString()
                   : ''
               }</div>
               <div class="recipe__description">
                 <span class="recipe__unit">${incredient.unit}</span>
                 ${incredient.description}
               </div>
            </li>
         `;
  }
}

export default new RecipeView();
