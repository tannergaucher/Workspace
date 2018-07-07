const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController')


// @ADD ITEM
router.post('/addItem', itemController.addItem)

// @DELETE ITEM

// @GET ITEMS




// router.get('/getItems', itemController.getItems);

router.get('./', itemController.test);

// router.get('./post', itemController.addItem);

module.exports = router;