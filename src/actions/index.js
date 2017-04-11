// actions index file
//
//
// setQuery action creators here
// the input parameter will be the event.target.value
// import axios from 'axios';
//
// function fetchRecipes(query, page = 0) {
//   return axios
//     .get('/recipes.json')
//     .then(response => response.data)
// }

export const setQuery = (text) => {
  // console.log('this is action creating setQuery to', text);
  return {
    type: 'SET_QUERY',
    text
  }
}

export const selectRecipe = (recipe) => {
  console.log('selectRecipe action triggered')
  return {
    type: 'RECIPE_SELECTED',
    payload: recipe
  }
}
//for later need to update the profileName to call
//and show the form for log in
export const showProfile = () => {
  console.log('triggering showProfile');
  return {
    type: 'SHOW_PROFILE_NAME',
    profileName: 'Paola'
  }
}

// export const doSearch = (query) => {
//   return {
//     type: 'DO_SEARCH',
//     payload: fetchRecipes(query)
//   }
// }
