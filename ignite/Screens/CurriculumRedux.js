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
  error: null,
  result: null,
  firstName: null, lastName: null, nickName: null, biography: null, photo: null, restaurant: null, distinctions: null,
  errorMessage: null,
  errorReason: null,
  errorDescription: null,
  errorRecoverySuggestion: null,
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
  const firstName = result[0].firstName;
  const lastName = result[0].lastName;
  const nickName = result[0].nickName;
  const biography = result[0].biography;
  const photo = result[0].photo;
  const restaurant = result[0].restaurant;
  const distinctions = result[0].distinctions;
  return state.merge({ 
    fetching: false, error: false, 
    result, firstName, lastName, nickName, biography, photo, restaurant, distinctions,
    errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null })
}

// failed to get the temperature
export const failure = (state, action) => {
  _log('At CurriculumRedux: failure');
  const { errorMessage } = action;
  const errorReason = errorMessage.userInfo.NSLocalizedFailureReason;
  const errorDescription = errorMessage.userInfo.NSLocalizedDescription;
  const errorRecoverySuggestion = errorMessage.userInfo.NSLocalizedRecoverySuggestion;
  return state.merge({ 
    fetching: false, error: true, 
    eventId: null,
    result: null, firstName: null, lastName: null, nickName: null, biography: null, photo: null, restaurant: null, distinctions: null,
    errorMessage, errorDescription, errorReason, errorRecoverySuggestion });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_REQUEST]: request,
  [Types.FETCH_SUCCESS]: success,
  [Types.FETCH_FAILURE]: failure
})
