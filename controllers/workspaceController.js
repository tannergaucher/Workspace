const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Workspace = mongoose.model('Workspace')

//@add Workspace
exports.addWorkspace = async (req, res) => {
  const workspace = await new Workspace(req.body).save()
  console.log('added' + workspace)
  res.end()
}

//@delete Workspace
exports.deleteWorkspace = async (req, res) => {
  const workspace = await Workspace.findOne({ _id: req.params.id }).remove()
  console.log('deleted item', workspace)
  res.send('deleted')
  res.end()
}

//@update Workspace
exports.updateWorkspace = async (req, res) => {
  console.log('update workspace', req.params.id)
  console.log('req.body', req.body)
  const workspace = await Workspace.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true
    }
  ).exec()
  console.log('updated workspace', item)
}

//@get Workspace
exports.getWorkspace = async (req, res) => {
  console.log('getting workspace')
  const workspace = await Workspace.findOne({ _id: req.params.id })
  console.log(workspace)
  return res.json(workspace)
}

//@get Workspaces
exports.getWorkspaces = async (req, res) => {
  console.log('getting workspaces')
  const workspacesPromise = Workspace.find()
  const countPromise = Workspace.count()
  const [workspaces, count] = await Promise.all([
    workspacesPromise,
    countPromise
  ])
  console.log('workspaces', workspaces, 'count', count)
  return res.json(workspaces)
}
