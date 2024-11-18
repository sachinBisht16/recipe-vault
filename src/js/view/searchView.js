class SearchView {
  _parentEl = document.querySelector('.search');

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = document.querySelector('.search__field').value;
      handler(query);
      document.querySelector('.search__field').value = '';
    });
  }
}

export default new SearchView();
