const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController')

// @ADD ITEM
router.post('/addItem', itemController.addItem)

// @GET ITEMS
router.get('/getItems', itemController.getItems)

// @UPDATE ITEM
router.post('/udpateItem', itemController.updateItem)

// @DELETE ITEM
router.post('/deleteItem', itemController.deleteItem)

module.exports = router;