import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchRecipesRequest: ['recipeIds'],
  fetchRecipesSuccess: ['result'],
  fetchRecipesFailure: ['errorMessage'],
  selectRecipe: ['recipe'],
  toggleModal: null
})

export const ListRecipesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  result: null,
  recipeIds: null,
  selectedRecipe: null,
  errorMessage: null,
  errorReason: null,
  errorDescription: null,
  errorRecoverySuggestion: null
})

/* ------------- Reducers ------------- */

// request Recipes
export const request = (state, action) => {
  const { recipeIds } = action;
  _log('At ListRecipesRedux: request' + JSON.stringify(recipeIds));
  return state.merge({ 
    fetching: true, 
    result: [], 
    recipeIds, 
    selectedRecipe: null, 
    error: false, errorMessage: null });
}

// success to fetch Recipes
export const success = (state, action) => {
  _log('At ListRecipesRedux: success');
  const { result } = action;
  return state.merge({ 
    fetching: false, error: false, 
    result,
    selectedRecipe: null,
    errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null });
}

// failed to fetch Recipes
export const failure = (state, action) => {
  _log('At ListRecipesRedux: failure');
  const { errorMessage } = action;
  const errorReason = errorMessage.userInfo.NSLocalizedFailureReason;
  const errorDescription = errorMessage.userInfo.NSLocalizedDescription;
  const errorRecoverySuggestion = errorMessage.userInfo.NSLocalizedRecoverySuggestion;
  return state.merge({ 
    fetching: false, error: true, 
    recipeIds: null,
    result: null,
    recipeIds: null,
    selectedRecipe: null,
    errorMessage, errorDescription, errorReason, errorRecoverySuggestion });
}

// select recipe
export const selectRecipe = (state, action) => {
  const { selectedRecipe } = action;
  _log('At ListRecipesRedux: selectRecipe', selectedRecipe);
  return state.merge({ selectedRecipe });
}

// toggle Modal
export const toggleModal = (state, action) => {
  _log('At ListRecipesRedux: toggleModal action ' + action + ' state' + state);
  return state.merge({ showModal: !state.showModal, selectedRecipe: null });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_RECIPES_REQUEST]: request,
  [Types.FETCH_RECIPES_SUCCESS]: success,
  [Types.FETCH_RECIPES_FAILURE]: failure,
  [Types.SELECT_RECIPE]: selectRecipe,
  [Types.TOGGLE_MODAL]: toggleModal,
})
