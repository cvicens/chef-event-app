import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchRecipeRequest: ['recipeId'],
  fetchRecipeSuccess: ['result'],
  fetchRecipeFailure: ['errorMessage']
})

export const RecipeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  result: null,
  title: null, photo: null, ingredients: null, directions: null,
  errorMessage: null,
  errorReason: null,
  errorDescription: null,
  errorRecoverySuggestion: null,
  recipeId: null,
})

/* ------------- Reducers ------------- */

// request the sdk initialization
export const request = (state, action) => {
  _log('At RecipeRedux: request');
  const { recipeId } = action;
  return state.merge({ fetching: true, recipeId, result: {}, error: false, errorMessage: null });
}

// successful sdk initialization
export const success = (state, action) => {
  _log('At RecipeRedux: success');
  const { result } = action;
  const title = result[0].title;
  const photo = result[0].photo;
  const ingredients = result[0].ingredients;
  const directions = result[0].directions;
  return state.merge({ 
    fetching: false, error: false, 
    result, title, photo, ingredients, directions,
    errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null })
}

// failed to get the temperature
export const failure = (state, action) => {
  _log('At CurriculumRedux: failure');
  const { errorMessage } = action;
  const errorReason = errorMessage.userInfo.NSLocalizedFailureReason;
  const errorDescription = errorMessage.userInfo.NSLocalizedDescription;
  const errorRecoverySuggestion = errorMessage.userInfo.NSLocalizedRecoverySuggestion;
  return state.merge({ 
    fetching: false, error: true, 
    recipeId: null,
    result: null, title: null, photo: null, ingredients: null, directions: null,
    errorMessage, errorDescription, errorReason, errorRecoverySuggestion });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_RECIPE_REQUEST]: request,
  [Types.FETCH_RECIPE_SUCCESS]: success,
  [Types.FETCH_RECIPE_FAILURE]: failure
})
