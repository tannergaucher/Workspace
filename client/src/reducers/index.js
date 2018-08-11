import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  workspaces,
  workspacesHasErrored,
  workspacesIsLoading
} from './workspaces'

const rootReducer = combineReducers({
  workspaces,
  workspacesHasErrored,
  workspacesIsLoading,
  form: formReducer
})

export default rootReducer
