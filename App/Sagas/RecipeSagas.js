import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import RecipeActions from '../Redux/RecipeRedux'

const RCTFH = require('rct-fh');

// exported to make available for tests
export const generateLogData = (state) => state


function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

export function * fetchRecipe (action) {
  const { recipeId } = action
  _log('In RecipeSaga');

   if (__DEV__ && console.tron) {
      console.tron.display({
      name: '🔥 In RecipeSaga ### 🔥',
        preview: 'fetchRecipe',
        value: {
          action,
          recipeId: recipeId
        }
      });
   }

  try {
    var options = {
        "path": "/recipes", //only the path part of the url, the host will be added automatically
        "method": "POST", //all other HTTP methods are supported as well. For example, HEAD, DELETE, OPTIONS
        "contentType": "application/json",
        "data": { eq: { id: recipeId} }, //data to send to the server
        "timeout": 25000 // timeout value specified in milliseconds. Default: 60000 (60s)
      }
    const result = yield call(RCTFH.cloud, options);
    _log('fetch result', result);

    if (result) {
      _log('about to yield success')
      yield put(RecipeActions.fetchRecipeSuccess(result));
    } else {
      _log('about to yield failure')
      yield put(RecipeActions.fetchRecipeFailure(result));
    }
  } catch (e) {
    _log('about to yield failure (exception)')
    yield put(RecipeActions.fetchRecipeFailure(e));
  }
}
