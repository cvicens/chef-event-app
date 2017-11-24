import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    init: require('./InitRedux').reducer,
    events: require('./ListEventsRedux').reducer,
    recipes: require('./ListRecipesRedux').reducer,
    curriculum: require('./CurriculumRedux').reducer,
    recipe: require('./RecipeRedux').reducer,
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
