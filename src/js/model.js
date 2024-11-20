export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export async function loadRecipe(id) {
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );

  const data = await response.json();

  // Storing current recipe to state
  const { recipe } = data.data;
  state.recipe = recipe;
}

export async function searchRecipes(query) {
  // Storing serach query to the state
  state.search.query = query;

  // Fetching recipes for the query
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${query}`
  );

  const data = await response.json();

  // Storing recipes for the current query
  const { recipes } = data.data;
  state.search.results = recipes;
}
