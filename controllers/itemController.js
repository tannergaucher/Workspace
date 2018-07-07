const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Item = mongoose.model('Item');
const uuid = require('uuid');

exports.addItem = async (req, res) => {
  const item = await (new Item(req.body)).save();
  console.log('added')
  res.send(`Added item ${item}`)
}

exports.test =  (req, res) => {
  res.send('Works')
}

exports.testPost = (req, res) => {
  res.send('Test POST')
}

exports.getItems = (req, res) => {
  //get items from db
  // items => res.json
}

