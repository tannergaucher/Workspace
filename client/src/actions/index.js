import axios from 'axios'

export const CREATE_WORKSPACE = 'create_workspace'
export const WORKSPACES_FETCH_SUCCESS = 'workspaces_fetch_success'
export const WORKSPACES_HAS_ERRORED = 'workspace_has_errored'
export const WORKSPACES_IS_LOADING = 'workspace_is_loading'

export function workspacesHasErrored(bool) {
  return {
    type: WORKSPACES_HAS_ERRORED,
    hasErrored: bool
  }
}

export function workspacesIsLoading(bool) {
  return {
    type: WORKSPACES_IS_LOADING,
    isLoading: bool
  }
}

export function errorAfterFiveSeconds() {
  return dispatch => {
    setTimeout(() => {
      // this func able to dispatch other action creators
      dispatch(workspacesHasErrored(true))
    }, 5000)
  }
}

export function createWorkspace(values, callback) {
  return dispatch => {
    axios
      .post('/addWorkspace', values)
      .then(() => callback())
      .catch(error => console.log(error))
  }

  // return {
  //   type: CREATE_WORKSPACE,
  //   payload: workspace
  // }
}

export function workspacesFetchSuccess(workspaces) {
  return {
    type: WORKSPACES_FETCH_SUCCESS,
    workspaces
  }
}

export function workspacesFetch(url) {
  return dispatch => {
    dispatch(workspacesIsLoading(true))

    axios
      .get('/getWorkspaces')
      .then(response => {
        dispatch(workspacesFetchSuccess(response.data))
        dispatch(workspacesIsLoading(false))
      })
      .catch(error => dispatch(workspacesHasErrored(true)))
  }
}
