const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')

// @ADD ITEM
router.post('/addItem', itemController.addItem)

// @GET ITEMS
router.get('/getItems', itemController.getItems)

// @GETITEM
router.get('/getItem', itemController.getItem)

// @UPDATE ITEM
router.post('/updateItem/:id', itemController.updateItem)

// @DELETE ITEM
router.post('/deleteItem/:id', itemController.deleteItem)

module.exports = router
