import * as model from './model.js';
import SearchView from './view/searchView.js';
import ResultsView from './view/resultsView.js';
import RecipeView from './view/recipeView.js';
import PaginationView from './view/paginationView.js';

async function controlRecipe() {
  //  Getting recipe id
  const id = window.location.hash.slice(1);

  // guard clause
  if (!id) return;

  // Loading recipe
  await model.loadRecipe(id);

  //Recdering recipe
  RecipeView.render(model.state.recipe);
}

async function controlSearch(query) {
  //loading search results
  await model.searchRecipes(query);

  // Rendering results
  ResultsView.render(model.selectedResults());
  PaginationView.render(model.state);
}

function controlPagination(page) {
  ResultsView.render(model.selectedResults(page));
  PaginationView.render(model.state);

  model.state.page = page;
}

// intialization
function init() {
  RecipeView.addHandler(controlRecipe);
  SearchView.addHandlerSearch(controlSearch);
  PaginationView.addHandlerClick(controlPagination);
}

init();
