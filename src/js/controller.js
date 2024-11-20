import * as model from './model.js';
import SearchView from './view/searchView.js';
import ResultsView from './view/resultsView.js';
import RecipeView from './view/recipeView.js';

async function controlRecipe() {
  //  Getting recipe id
  const id = window.location.hash.slice(1);

  // Loading recipe
  await model.loadRecipe(id);

  //Recdering recipe
  RecipeView.render(model.state.recipe);
}

async function controlSearch(query) {
  //loading search results
  await model.searchRecipes(query);

  // Rendering results
  ResultsView.render(model.state.search.results);
}

// intialization
function init() {
  RecipeView.addHandler(controlRecipe);
  SearchView.addHandlerSearch(controlSearch);
}

init();
