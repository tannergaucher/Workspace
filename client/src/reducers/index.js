import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import workspacesReducer from './reducer_workspaces'

const rootReducer = combineReducers({
  workspaces: workspacesReducer,
  form: formReducer
})

export default rootReducer
