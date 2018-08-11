import { CREATE_WORKSPACE } from '../actions'
import { WORKSPACES_HAS_ERRORED } from '../actions'
import { WORKSPACES_IS_LOADING } from '../actions'
import { WORKSPACES_FETCH_SUCCESS } from '../actions'

export function createWorkspace(state = {}, action) {
  switch (action.type) {
    case CREATE_WORKSPACE:
      return { ...state, [action.payload._id]: action.payload }

    //case GET_WORKSPACE
    default:
      return state
  }
}

export function workspacesHasErrored(state = false, action) {
  switch (action.type) {
    case WORKSPACES_HAS_ERRORED:
      return action.hasErrored

    default:
      return state
  }
}

export function workspacesIsLoading(state = false, action) {
  switch (action.type) {
    case WORKSPACES_IS_LOADING:
      return action.isLoading

    default:
      return state
  }
}

// could return a subset of items, or none if all deleted
export function workspaces(state = {}, action) {
  switch (action.type) {
    case WORKSPACES_FETCH_SUCCESS:
      return action.workspaces

    default:
      return state
  }
}
