import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { workspaces } from './workspaces-reducer'

const rootReducer = combineReducers({
  workspaces,
  form: formReducer
})

export default rootReducer
