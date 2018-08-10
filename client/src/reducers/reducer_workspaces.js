import { CREATE_WORKSPACE } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_WORKSPACE:
      return { ...state, [action.payload.name]: action.payload }

    default:
      return state
  }
}
