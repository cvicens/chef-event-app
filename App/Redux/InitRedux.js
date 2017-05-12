import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  initRequest: null,
  initSuccess: null,
  initFailure: ['errorMessage'],
  togglePresentation: null,
})

export const InitTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  errorMessage: null,
  date: null,
  showPresentation: false
})

/* ------------- Reducers ------------- */

// request the sdk initialization
export const request = (state) => {
  console.log('>>>>>> At InitRedux: request #1 ' + JSON.stringify(state));
  const _state = state.merge({ fetching: true, date: JSON.stringify(new Date()) });
  console.log('>>>>>> At InitRedux: request #2 ' + JSON.stringify(_state));
  return _state;
}

// successful sdk initialization
export const success = (state) => {
  console.log('>>>>>> At InitRedux: success #1 ' + JSON.stringify(state));
  const _state = state.merge({ fetching: false, error: null, date: JSON.stringify(new Date()) });
  console.log('>>>>>> At InitRedux: success #2 ' + JSON.stringify(_state));
  return _state;
}

// failed to get the temperature
export const failure = (state, action) => {
  const { errorMessage } = action;
  console.log('>>>>>> At InitRedux: failure #1 ' + JSON.stringify(state));
  const _state = state.merge({ fetching: false, error: true, errorMessage, date: JSON.stringify(new Date()) });
  console.log('>>>>>> At InitRedux: failure #2 ' + JSON.stringify(_state));
  return _state;
}

// request the sdk initialization
export const togglePresentation = (state) => {
  console.log('>>>>>> At InitRedux: togglePresentation ' + JSON.stringify(state));
  return state.merge({ showPresentation: !state.showPresentation });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT_REQUEST]: request,
  [Types.INIT_SUCCESS]: success,
  [Types.INIT_FAILURE]: failure,
  [Types.TOGGLE_PRESENTATION]: togglePresentation
})
