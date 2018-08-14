import axios from 'axios'

export const FETCH_WORKSPACES = 'fetch_workspaces'
export const FETCH_WORKSPACE = 'fetch_workspace'
export const RECEIVE_WORKSPACES = 'receive_workspaces'
export const RECEIVE_WORKSPACE = 'receive_workspaces'
export const CREATE_WORKSPACE = 'create_workspace'
export const DELETE_WORKSPACE = 'delete_workspace'

export function fetchWorkspaces() {
  const request = axios.get(`/getWorkspaces`)

  return {
    type: FETCH_WORKSPACES,
    payload: request
  }
}

export function fetchWorkspace(id) {
  const request = axios.get(`/getWorkspace/${id}`)

  return {
    type: FETCH_WORKSPACE,
    payload: request
  }
}

export function createWorkspace(values, callback) {
  const request = axios.post('/addWorkspace', values).then(() => callback())

  return {
    type: CREATE_WORKSPACE,
    payload: request
  }
}

// export function createWorkspace(values, callback) {
//   return dispatch => {
//     dispatch({ type: CREATE_WORKSPACE, values })
//     axios.post('/addWorkspace', values).then(response => {
//       callback()
//       dispatch({ type: RECEIVE_WORKSPACES }, response)
//     })
//   }
// }

export function deleteWorkspace(id, callback) {
  return dispatch => {
    dispatch({ type: DELETE_WORKSPACE, id })
    axios.post(`/deleteWorkspace/${id}`).then(() => callback())
  }
}
