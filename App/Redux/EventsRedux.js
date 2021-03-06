import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

function _log(message) {
   if (__DEV__ && console.tron) {
    console.tron.log(message);
  }
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchEventsRequest: ['country', 'city'],
  fetchEventsSuccess: ['result'],
  fetchEventsFailure: ['errorMessage'],
  selectEvent: ['eventId']
})

export const EventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  result: null,
  country: null,
  city: null,
  eventId: null,
  errorMessage: null,
  errorReason: null,
  errorDescription: null,
  errorRecoverySuggestion: null
})

/* ------------- Reducers ------------- */

// request events
export const request = (state, action) => {
  _log('At EventsRedux: request');
  const { country, city } = action;
  return state.merge({ fetching: true, result: [], eventId: null, error: false, errorMessage: null });
}

// success to fetch events
export const success = (state, action) => {
  _log('At EventsRedux: success');
  const { result } = action;
  return state.merge({ 
    fetching: false, error: false, 
    result,
    eventId: null,
    errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null })
}

// failed to fetch events
export const failure = (state, action) => {
  _log('At EventsRedux: failure');
  const { errorMessage } = action;
  const errorReason = errorMessage.userInfo.NSLocalizedFailureReason;
  const errorDescription = errorMessage.userInfo.NSLocalizedDescription;
  const errorRecoverySuggestion = errorMessage.userInfo.NSLocalizedRecoverySuggestion;
  return state.merge({ 
    fetching: false, error: true, 
    contry: null,
    city: null,
    result: null,
    eventId: null,
    errorMessage, errorDescription, errorReason, errorRecoverySuggestion });
}

// select event
export const selectEvent = (state, action) => {
  const { eventId } = action;
  _log('At EventsRedux: selectEvent', eventId);
  return state.merge({ eventId });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_EVENTS_REQUEST]: request,
  [Types.FETCH_EVENTS_SUCCESS]: success,
  [Types.FETCH_EVENTS_FAILURE]: failure,
  [Types.SELECT_EVENT]: selectEvent,
})
