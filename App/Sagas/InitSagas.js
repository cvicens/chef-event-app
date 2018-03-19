import { delay } from 'redux-saga'
import { call, put, take, takeEvery } from 'redux-saga/effects'
import { path } from 'ramda'
import InitActions from '../Redux/InitRedux'

import { Alert } from 'react-native'

const RCTFH = require('rct-fh');

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

// Our worker Saga: will perform the async increment task
export function* _init() {
  _log('_init 1');
  yield delay(1000);
  _log('_init 2');
  //yield put({ type: 'INCREMENT' });
  //console.log('incrementAsync 3');
}

export function * init (action) {
  _log('++++++++++ In InitSaga +++++++++++++ ' + JSON.stringify(new Date()) +  ' <<<');

  //console.log('before delay');  
  //yield delay(5000);
  //console.log('after 5 secs');  
  try {
    _log('>>> init result 1# ' + JSON.stringify(new Date()) +  ' <<<');
    const result = yield call(RCTFH.init);
    //const result = yield call(_init);
    _log('>>> init result 2# ' + JSON.stringify(result) + ' ' + JSON.stringify(new Date()) +  ' <<<');

    if (result === 'SUCCESS') {
      _log('>>> about to yield success' + JSON.stringify(new Date()));
      console.log('👍 init OK');
      yield put(InitActions.initSuccess());
    } else {
      _log('about to yield failure' + JSON.stringify(new Date()));
      console.log('👎 init KO');
      yield put(InitActions.initFailure(result));
    }
  } catch (e) {
    _log('about to yield failure (exception)' + JSON.stringify(new Date()));
    console.log('👎 init KO');
    yield put(InitActions.initFailure(e));
  }
}

export function * findEvent (action) {
  var { country, city } = action;
  if (country === 'undefined' || country.code === 'undefined' || city === 'undefined') {
    yield put(InitActions.findEventSuccess([]));
  }
  const countryCode = country.code || country;
  _log('In InitSaga fetchEvent');

   if (__DEV__ && console.tron) {
      console.tron.display({
      name: '🔥 In InitSaga ### 🔥',
        preview: 'fetchEvent',
        value: {
          action,
          country: country,
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
      yield put(InitActions.findEventSuccess(result));
      if (result.length <= 0) {
        Alert.alert(
          'No events for today at that location!',
          'Choose another location...'
        )
      }
    } else {
      _log('about to yield failure')
      yield put(InitActions.findEventFailure(result));
    }
  } catch (e) {
    _log('about to yield failure (exception)')
    yield put(InitActions.findEventFailure(e));
  }
}

/*export function * updateCountry (action) {
  _log('++++++++++ In updateCountry +++++++++++++ ' + JSON.stringify(new Date()) +  ' <<<');
  yield put(InitActions.updateCountry('DUMMY'));
}

export function * updateCity (action) {
  yield put(InitActions.updateCity());
}

export function * updateEventId (action) {
  yield put(InitActions.updateEventId());
}*/