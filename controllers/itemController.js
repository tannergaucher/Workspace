const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Item = mongoose.model('Item');
// const uuid = require('uuid');

//add item
exports.addItem = async (req, res) => {
  const item = await (new Item(req.body)).save();
  console.log('added' + item)
}

//deleteItem
exports.deleteItem = async (req, res) => {
  const item = await Item.findOne({ id: _req.params.id });
  console.log('deleteItem findOne' , item)
  
}

//updateItem
exports.updateItem = async (req, res) => {
  const item = await Item.findOneAndUpdate({ _id: req.params.id}, req.body, {
    new: true,
    runValidators: true
  }).exec();
}

//getItems
exports.getItems = async (req, res) => {
  const itemsPromise = Item.find()
  const countPromise = Item.count()
  const [items, count] = await Promise.all([itemsPromise, countPromise]);
  console.log("items", items, "count", count);
}
