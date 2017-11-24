import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ListRecipesActions from '../Redux/ListRecipesRedux'

const RCTFH = require('rct-fh');

// exported to make available for tests
export const generateLogData = (state) => state

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

export function * fetchRecipes (action) {
  const { recipeIds } = action
  _log('In ListRecipesSagas');

   if (__DEV__ && console.tron) {
      console.tron.display({
      name: '🔥 In ListRecipesSagas ### 🔥',
        preview: 'fetchRecipes',
        value: {
          action,
          recipeIds: recipeIds
        }
      });
   }

  try {
    var options = {
        "path": "/recipes", //only the path part of the url, the host will be added automatically
        "method": "POST", //all other HTTP methods are supported as well. For example, HEAD, DELETE, OPTIONS
        "data": {
          "in": {
            "id": recipeIds
          }
        },
        "contentType": "application/json",
        "timeout": 25000 // timeout value specified in milliseconds. Default: 60000 (60s)
      }
    const result = yield call(RCTFH.cloud, options);
    _log('fetch result', result);

    if (result) {
      _log('about to yield success')
      yield put(ListRecipesActions.fetchRecipesSuccess(result));
    } else {
      _log('about to yield failure')
      yield put(ListRecipesActions.fetchRecipesFailure(result));
    }
  } catch (e) {
    _log('about to yield failure (exception)')
    yield put(ListRecipesActions.fetchRecipesFailure(e));
  }
}
