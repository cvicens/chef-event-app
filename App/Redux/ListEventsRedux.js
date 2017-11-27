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
  selectEvent: ['selectedEvent'],
  toggleModalEvents: false
})

export const ListEventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  result: null,
  country: null,
  city: null,
  selectedEvent: null,
  showModal: null,
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
  _log('At ListEventsRedux: request action ' + action + ' state' + state);
  return state.merge({ 
    fetching: true, 
    result: [], 
    selectedEvent: null, 
    showModal: null, 
    errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null });
}

// success to fetch events
export const success = (state, action) => {
  const { result } = action;
  _log('At ListEventsRedux: success action ' + action + ' state' + state);
  return state.merge({ 
    fetching: false,
    result,
    selectedEvent: null,
    showModal: null,
    errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null })
}

// failed to fetch events
export const failure = (state, action) => {
  const { errorMessage } = action;
  _log('At ListEventsRedux: failure action ' + action + ' state' + state);
  const errorReason = errorMessage.userInfo.NSLocalizedFailureReason;
  const errorDescription = errorMessage.userInfo.NSLocalizedDescription;
  const errorRecoverySuggestion = errorMessage.userInfo.NSLocalizedRecoverySuggestion;
  return state.merge({ 
    fetching: false, error: true, 
    contry: null,
    city: null,
    result: null,
    selectedEvent: null,
    showModal: null,
    errorMessage, errorDescription, errorReason, errorRecoverySuggestion });
}

// select event
export const selectEvent = (state, action) => {
  const { selectedEvent } = action;
  _log('At ListEventsRedux: selectEvent action ' + action + ' state' + state);
  return state.merge({ selectedEvent, showModal: true });
}

// toggle Modal
export const toggleModal = (state, action) => {
  _log('At ListEventsRedux: toggleModal action ' + action + ' state' + state);
  return state.merge({ showModal: !state.showModal, selectedEvent: null });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_EVENTS_REQUEST]: request,
  [Types.FETCH_EVENTS_SUCCESS]: success,
  [Types.FETCH_EVENTS_FAILURE]: failure,
  [Types.SELECT_EVENT]: selectEvent,
  [Types.TOGGLE_MODAL_EVENTS]: toggleModal,
})
