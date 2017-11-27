import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchWinePairingRequest: ['foodType'],
  fetchWinePairingSuccess: ['result'],
  fetchWinePairingFailure: ['errorMessage'],
  toggleModalWinePairing: false
})

export const WinePairingTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  result: null,
  foodType: null,
  errorMessage: null,
  errorReason: null,
  errorDescription: null,
  errorRecoverySuggestion: null
})

/* ------------- Reducers ------------- */

// request WinePairing
export const request = (state, action) => {
  const { foodType } = action;
  _log('At WinePairingRedux: request' + JSON.stringify(foodType));
  return state.merge({ 
    fetching: true, 
    result: [], 
    foodType, 
    error: false, errorMessage: null });
}

// success to fetch WinePairing
export const success = (state, action) => {
  _log('At WinePairingRedux: success');
  const { result } = action;
  return state.merge({ 
    fetching: false, error: false, 
    result,
    errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null });
}

// failed to fetch WinePairing
export const failure = (state, action) => {
  _log('At WinePairingRedux: failure');
  const { errorMessage } = action;
  const errorReason = errorMessage.userInfo.NSLocalizedFailureReason;
  const errorDescription = errorMessage.userInfo.NSLocalizedDescription;
  const errorRecoverySuggestion = errorMessage.userInfo.NSLocalizedRecoverySuggestion;
  return state.merge({ 
    fetching: false, error: true, 
    result: null,
    foodType: null,
    errorMessage, errorDescription, errorReason, errorRecoverySuggestion });
}

// toggle Modal
export const toggleModal = (state, action) => {
  _log('At WinePairingRedux: toggleModal action ' + action + ' state' + state);
  return state.merge({ showModal: !state.showModal });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_WINE_PAIRING_REQUEST]: request,
  [Types.FETCH_WINE_PAIRING_SUCCESS]: success,
  [Types.FETCH_WINE_PAIRING_FAILURE]: failure,
  [Types.TOGGLE_MODAL_WINE_PAIRING]: toggleModal,
})
