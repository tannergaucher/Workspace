const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//create Schema
const itemSchema = new mongoose.Schema ({
  name: {
    type: String,
  },
  price: {
    type: String
  },
  rating: {
    type: Number
  },
  id: {
    type: String
  }
});

module.exports = mongoose.model('Item', itemSchema);