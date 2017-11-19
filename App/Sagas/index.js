import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { InitTypes } from '../Redux/InitRedux'
import { EventsTypes } from '../Redux/EventsRedux'
import { CurriculumTypes } from '../Redux/CurriculumRedux'
import { RecipeTypes } from '../Redux/RecipeRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { getUserAvatar } from './GithubSagas'
import { openScreen } from './OpenScreenSagas'
import { init, findEvent } from './InitSagas'
import { fetchEvents } from './EventsSagas'
import { fetchCurriculum } from './CurriculumSagas'
import { fetchRecipe } from './RecipeSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),
    
    takeLatest(InitTypes.INIT_REQUEST, init),
    takeLatest(InitTypes.FIND_EVENT_REQUEST, findEvent),
    //takeLatest(InitTypes.UPDATE_COUNTRY, updateCountry),
    //takeLatest(InitTypes.UPDATE_CITY, updateCity),
    //takeLatest(InitTypes.UPDATE_EVENT_ID, updateEventId),

    takeLatest(EventsTypes.FETCH_EVENTS_REQUEST, fetchEvents),

    takeLatest(CurriculumTypes.FETCH_REQUEST, fetchCurriculum),

    takeLatest(RecipeTypes.FETCH_RECIPE_REQUEST, fetchRecipe),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]
}
