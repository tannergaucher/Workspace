const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//create Schema
const workspaceSchema = new mongoose.Schema({
  name: {
    type: String
  },
  rating: {
    type: String
  },
  location: {
    type: String
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Workspace', workspaceSchema)
