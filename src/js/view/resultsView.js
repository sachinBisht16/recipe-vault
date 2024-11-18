class ResultsView {
  _parentEl = document.querySelector('.results');
  _data;

  _generateMarkup() {
    return this._data
      .map(result => {
        return `
              <li class="preview">
                  <a class="preview__link" href="#${result.id}">
                      <figure class="preview__fig">
                          <img src=${result.image_url} alt=${result.title} />
                      </figure>
                      <div class="preview__data">
                          <h4 class="preview__title">${result.title}</h4>
                          <p class="preview__publisher">${result.publisher}</p>
                      </div>
                  </a>
              </li>
          `;
      })
      .join(' ');
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new ResultsView();
