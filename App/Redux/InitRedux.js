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
  updateShowPresentation: ['showPresentation'],
  updateCountry: ['country'],
  updateCity: ['city'],
  updateEventId: ['eventId'],
  findEventRequest: ['country', 'city'],
  findEventSuccess: ['result'],
  findEventFailure: ['errorMessage']
})

export const InitTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  ready: false,
  fetching: false,
  error: null,
  errorMessage: null,
  date: null,
  showPresentation: false,
  country: null,
  city: null,
  eventId: null,
  chefId: null,
  recipeId: null,
  venueAddress: null,
  venueCity: null,
  venueProvince: null,
  venueCountry: null,
})

/* ------------- Reducers ------------- */

// request the sdk initialization
export const request = (state) => {
  //console.log('>>>>>> At InitRedux: request #1 ' + JSON.stringify(state));
  const _state = state.merge({ ready: false, showPresentation: false, fetching: true, date: JSON.stringify(new Date()) });
  //console.log('>>>>>> At InitRedux: request #2 ' + JSON.stringify(_state));
  return _state;
}

// successful sdk initialization
export const success = (state) => {
  //console.log('>>>>>> At InitRedux: success #1 ' + JSON.stringify(state));
  const _state = state.merge({ ready: true, showPresentation: false, fetching: false, error: null, date: JSON.stringify(new Date()) });
  //console.log('>>>>>> At InitRedux: success #2 ' + JSON.stringify(_state));
  return _state;
}

// failed to init sdk
export const failure = (state, action) => {
  const { errorMessage } = action;
  //console.log('>>>>>> At InitRedux: failure #1 ' + JSON.stringify(state));
  const _state = state.merge({ ready: false, showPresentation: false, fetching: false, error: true, errorMessage, date: JSON.stringify(new Date()) });
  //console.log('>>>>>> At InitRedux: failure #2 ' + JSON.stringify(_state));
  return _state;
}

// request the sdk initialization
export const findEventRequest = (state, action) => {
  _log('At InitRedux: findEventRequest');
  const { country, city } = action;
  return state.merge({ fetching: true, country, city, result: {}, error: false, errorMessage: null });
}

// successful sdk initialization
export const findEventSuccess = (state, action) => {
  _log('At InitRedux: findEventSuccess');
  const { result } = action;
  if (result.length <= 0) {
    return state.merge({ 
        fetching: false, error: false,
        country: null, city: null,
        result, eventId: null, chefId: null, recipeId: null, venueAddress: null, venueCity: null, venueProvince: null, venueCountry: null, date: null, startTime: null, endTime: null,
        errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null });
  }

  const eventId = result[0].id;
  const chefId = result[0].chefId;
  const recipeId = result[0].recipeId;
  const venueAddress = result[0].address;
  const venueCity = result[0].city;
  const venueProvince = result[0].province;
  const venueCountry = result[0].country;
  const date = result[0].date;
  const startTime = result[0].startTime;
  const endTime = result[0].endTime;
  return state.merge({ 
    fetching: false, error: false, 
    result, eventId, chefId, recipeId, venueAddress, venueCity, venueProvince, venueCountry, date, startTime, endTime,
    errorMessage: null, errorDescription: null, errorReason: null, errorRecoverySuggestion: null });
}

// failed to get the temperature
export const findEventFailure = (state, action) => {
  _log('At InitRedux: findEventFailure');
  const { errorMessage } = action;
  if (errorMessage === 'undefined' || errorMessage.userInfo === 'undefined') {
    return state.merge({ 
      fetching: false, error: true, 
      result: null, eventId: null, chefId: null, address: null, city: null, province: null, country: null, date: null, startTime: null, endTime: null,
      errorMessage, errorDescription: 'No information', errorReason: 'N/A', errorRecoverySuggestion: 'M/A'});  
  }

  const errorReason = errorMessage.userInfo.NSLocalizedFailureReason;
  const errorDescription = errorMessage.userInfo.NSLocalizedDescription;
  const errorRecoverySuggestion = errorMessage.userInfo.NSLocalizedRecoverySuggestion;
  return state.merge({ 
    fetching: false, error: true, 
    result: null, eventId: null, chefId: null, recipeId: null, address: null, city: null, province: null, country: null, date: null, startTime: null, endTime: null,
    errorMessage, errorDescription, errorReason, errorRecoverySuggestion });
}

// toggle presentation
export const togglePresentation = (state) => {
  //console.log('>>>>>> At InitRedux: togglePresentation ' + JSON.stringify(state));
  return state.merge({ showPresentation: !state.showPresentation });
}

// show presentation
export const updateShowPresentation = (state, action) => {
  const { showPresentation } = action;
  //console.log('>>>>>> At InitRedux: updateShowPresentation ' + JSON.stringify(showPresentation));
  return state.merge({ showPresentation });
}

// update country
export const updateCountry = (state, action) => {
  const { country } = action;
  //console.log('>>>>>> At InitRedux: updateCountry ' + JSON.stringify(country));
  return state.merge({ country, city: null, eventId: null });
}

// update city
export const updateCity = (state, action) => {
  const { city } = action;
  //console.log('>>>>>> At InitRedux: updateCity ' + JSON.stringify(city));
  return state.merge({ city });
}

// update eventId
export const updateEventId = (state, action) => {
  const { eventId } = action;
  //console.log('>>>>>> At InitRedux: updateEventId ' + JSON.stringify(eventId));
  return state.merge({ eventId });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT_REQUEST]: request,
  [Types.INIT_SUCCESS]: success,
  [Types.INIT_FAILURE]: failure,
  [Types.FIND_EVENT_REQUEST]: findEventRequest,
  [Types.FIND_EVENT_SUCCESS]: findEventSuccess,
  [Types.FIND_EVENT_FAILURE]: findEventFailure,
  [Types.TOGGLE_PRESENTATION]: togglePresentation,
  [Types.UPDATE_SHOW_PRESENTATION]: updateShowPresentation,
  [Types.UPDATE_COUNTRY]: updateCountry,
  [Types.UPDATE_CITY]: updateCity,
  [Types.UPDATE_EVENT_ID]: updateEventId
})
