const express = require('express')
const router = express.Router()
const workspaceController = require('../controllers/workspaceController')

// @ADD WORKSPACE
router.post('/addWorkspace', workspaceController.addWorkspace)

// @DELETE WORKSPACE
router.post('/deleteWorkspace/:id', workspaceController.deleteWorkspace)

// @UPDATE WORKSPACE
router.post('/updateWorkspace/:id', workspaceController.updateWorkspace)

// @GET WORKSPACE
router.get('/getWorkspace/:id', workspaceController.getWorkspace)

// @GET WORKSPACES
router.get('/getWorkspaces', workspaceController.getWorkspaces)

module.exports = router
