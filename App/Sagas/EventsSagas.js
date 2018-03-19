import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import EventsActions from '../Redux/EventsRedux'
import InitActions from '../Redux/InitRedux'

const RCTFH = require('rct-fh');

// exported to make available for tests
export const generateLogData = (state) => state

function getIsoDate (date) {
  if (!date) {
    return null;
  }
  return date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + date.getDate()).slice(-2);
}

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

export function * fetchEvents (action) {
  const { country, city } = action
  _log('In EventsSaga');

  const countryCode = country.code || country;

   if (__DEV__ && console.tron) {
      console.tron.display({
      name: '🔥 In EventsSaga ### 🔥',
        preview: 'fetchEvents',
        value: {
          action,
          contry: country,
          city: city
        }
      });
   }

  try {
    var options = {
        "path": "/events/" + countryCode.toUpperCase() + '/' + city.toUpperCase() + '/' + getIsoDate(new Date()), //only the path part of the url, the host will be added automatically
        "method": "GET", //all other HTTP methods are supported as well. For example, HEAD, DELETE, OPTIONS
        "contentType": "application/json",
        "timeout": 25000 // timeout value specified in milliseconds. Default: 60000 (60s)
      }
    const result = yield call(RCTFH.cloud, options);
    _log('fetch result', result);

    if (result) {
      _log('about to yield success')
      yield put(EventsActions.fetchEventsSuccess(result));
    } else {
      _log('about to yield failure')
      yield put(EventsActions.fetchEventsFailure(result));
    }
  } catch (e) {
    _log('about to yield failure (exception)')
    yield put(EventsActions.fetchEventsFailure(e));
  }
}
