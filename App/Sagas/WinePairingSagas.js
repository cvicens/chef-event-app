import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import WinePairingActions from '../Redux/WinePairingRedux'

const RCTFH = require('rct-fh');

// exported to make available for tests
export const generateLogData = (state) => state

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

function fakeWirePairing () {
  return new Promise((resolve, reject) => {
    resolve (require('../../ignite/Screens/sampleWinePairing.json'));
  });
}

export function * fetchWinePairing (action) {
  const { foodType } = action
  _log('In WinePairingSagas');

   if (__DEV__ && console.tron) {
      console.tron.display({
      name: '🔥 In WinePairingSagas ### 🔥',
        preview: 'fetchWinePairing',
        value: {
          action,
          foodType: foodType
        }
      });
   }

  try {
    var options = {
        "path": "/service/winepairing?foodType=" + foodType,
        "method": "GET",
        "contentType": "application/json",
        "timeout": 25000 // timeout value specified in milliseconds. Default: 60000 (60s)
      }
    //const result = yield call(RCTFH.cloud, options);
    const result = yield call(fakeWirePairing);
    _log('fetch result', result);

    if (result) {
      _log('about to yield success')
      yield put(WinePairingActions.fetchWinePairingSuccess(result));
    } else {
      _log('about to yield failure')
      yield put(WinePairingActions.fetchWinePairingFailure(result));
    }
  } catch (e) {
    _log('about to yield failure (exception)')
    yield put(WinePairingActions.fetchWinePairingFailure(e));
  }
}
