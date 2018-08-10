const express = require('express')
const router = express.Router()
const workspaceController = require('../controllers/workspaceController')

// @ADD WORKSPACE
router.post('/addWorkspace', workspaceController.addWorkspace)

// @GET WORKSPACES
router.get('/getWorkspaces', workspaceController.getWorkspaces)

// @GET WORKSPACE
router.get('/getWorkspace/:id', workspaceController.getWorkspace)

// @UPDATE WORKSPACE
router.post('/updateWorkspace/:id', workspaceController.updateWorkspace)

// @DELETE WORKSPACE
router.post('/deleteWorkspace/:id', workspaceController.deleteWorkspace)

module.exports = router
