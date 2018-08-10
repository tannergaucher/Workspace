export const CREATE_WORKSPACE = 'create_workspace'

export function createWorkspace(values, callback) {
  const workspace = values
  return {
    type: CREATE_WORKSPACE,
    payload: workspace
  }
}
