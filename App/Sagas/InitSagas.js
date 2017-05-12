import { delay } from 'redux-saga'
import { call, put, take, takeEvery } from 'redux-saga/effects'
import { path } from 'ramda'
import InitActions from '../Redux/InitRedux'

const RCTFH = require('rct-fh');

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

// Our worker Saga: will perform the async increment task
export function* _init() {
  console.log('_init 1');
  yield delay(1000);
  console.log('_init 2');
  //yield put({ type: 'INCREMENT' });
  //console.log('incrementAsync 3');
}

export function * init (action) {
  _log('++++++++++ In InitSaga +++++++++++++ ' + JSON.stringify(new Date()) +  ' <<<');

  //console.log('before delay');  
  //yield delay(5000);
  //console.log('after 5 secs');  
  try {
    console.log('>>> init result 1# ' + JSON.stringify(new Date()) +  ' <<<');
    const result = yield call(RCTFH.init);
    //const result = yield call(_init);
    console.log('>>> init result 2# ' + JSON.stringify(result) + ' ' + JSON.stringify(new Date()) +  ' <<<');

    if (result === 'SUCCESS') {
      console.log('>>> about to yield success' + JSON.stringify(new Date()));
      yield put(InitActions.initSuccess());
    } else {
      console.log('about to yield failure' + JSON.stringify(new Date()));
      yield put(InitActions.initFailure(result));
    }
  } catch (e) {
    console.log('about to yield failure (exception)' + JSON.stringify(new Date()));
    yield put(InitActions.initFailure(e));
  }
}
