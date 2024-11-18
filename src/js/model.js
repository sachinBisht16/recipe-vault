export const state = {
  search: {
    query: '',
    results: [],
  },
};

export async function searchRecipes(query) {
  // Storing serach query to the state
  state.search.query = query;

  // Fetching recipes for the query
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${query}`
  );
  const data = await response.json();

  const { recipes } = data.data;

  // Storing recipes for the current query
  state.search.results = recipes;
}
