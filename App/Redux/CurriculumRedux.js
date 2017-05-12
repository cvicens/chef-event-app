import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchRequest: ['eventId'],
  fetchSuccess: ['result'],
  fetchFailure: ['errorMessage']
})

export const CurriculumTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  result: {},
  error: null,
  errorMessage: null,
  eventId: null
})

/* ------------- Reducers ------------- */

// request the sdk initialization
export const request = (state, action) => {
  _log('At CurriculumRedux: request');
  const { eventId } = action;
  return state.merge({ fetching: true, eventId, result: {}, error: false, errorMessage: null });
}

// successful sdk initialization
export const success = (state, action) => {
  _log('At CurriculumRedux: success');
  const { result } = action;
  return state.merge({ fetching: false, error: false, result })
}

// failed to get the temperature
export const failure = (state, action) => {
  _log('At CurriculumRedux: failure');
  const { errorMessage } = action;
  return state.merge({ fetching: false, error: true, errorMessage, eventId: null });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_REQUEST]: request,
  [Types.FETCH_SUCCESS]: success,
  [Types.FETCH_FAILURE]: failure
})
