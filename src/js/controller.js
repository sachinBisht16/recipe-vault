import * as model from './model.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';

async function controlSearch(query) {
  //loading search results
  await model.searchRecipes(query);

  // Rendering results
  resultsView.render(model.state.search.results);
}

// intialization
function init() {
  searchView.addHandlerSearch(controlSearch);
}

init();
