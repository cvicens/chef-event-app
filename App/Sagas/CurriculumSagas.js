import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import CurriculumActions from '../Redux/CurriculumRedux'

const RCTFH = require('rct-fh');

// exported to make available for tests
export const generateLogData = (state) => state


function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

export function * fetchCurriculum (action) {
  const { chefId } = action
  _log('In CurriculumSaga');

   if (__DEV__ && console.tron) {
      console.tron.display({
      name: '🔥 In CurriculumSaga ### 🔥',
        preview: 'fetchCurriculum',
        value: {
          '💃': 'Welcome to the future!',
          action,
          chefId: chefId
        }
      });
   }

  try {
    var options = {
        "path": "/curricula", //only the path part of the url, the host will be added automatically
        "method": "POST", //all other HTTP methods are supported as well. For example, HEAD, DELETE, OPTIONS
        "contentType": "application/json",
        "data": { eq: { id: chefId } }, //data to send to the server
        "timeout": 25000 // timeout value specified in milliseconds. Default: 60000 (60s)
      }
    const result = yield call(RCTFH.cloud, options);
    _log('fetch result', result);

    if (result) {
      _log('about to yield success')
      yield put(CurriculumActions.fetchSuccess(result));
    } else {
      _log('about to yield failure')
      yield put(CurriculumActions.fetchFailure(result));
    }
  } catch (e) {
    _log('about to yield failure (exception)')
    yield put(CurriculumActions.fetchFailure(e));
  }
}
