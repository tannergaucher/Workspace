import { FETCH_WORKSPACES, FETCH_WORKSPACE } from '../actions'
import _ from 'lodash'

export function workspaces(state = {}, action) {
  switch (action.type) {
    case FETCH_WORKSPACES:
      return _.mapKeys(action.payload.data, '_id')

    case FETCH_WORKSPACE:
      return action.payload.data

    default:
      return state
  }
}
