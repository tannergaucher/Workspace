const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Item = mongoose.model('Item');

//add item
exports.addItem = async (req, res) => {
  console.log('itemcontroller add item')
  // req.body.author = req.user._id;
  const item = await (new Item(req.body)).save();
  console.log('added' + item)
}

//deleteItem
exports.deleteItem = async (req, res) => {
  console.log("item controller req.params.id", req.params.id)
  const item = await Item.findOne({ id: req.params.id }).remove();
  console.log('deleteItem findOne' , item)
}

//updateItem
exports.updateItem = async (req, res) => {
  console.log("itemController.updateItem", req.params.id)
  console.log("req.body", req.body)
  
  const item = await Item.findOneAndUpdate({ id: req.params.id}, req.body, {
    new: true,
    runValidators: true
  }).exec();
  
  console.log('updateItem', item)
}

//getItems
exports.getItems = async (req, res) => {
  console.log("getting items")
  const itemsPromise = Item.find()
  const countPromise = Item.count()
  const [items, count] = await Promise.all([itemsPromise, countPromise]);
  console.log("items", items, "count", count);
}
