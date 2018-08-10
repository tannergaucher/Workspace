const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//create Schema
const workspaceSchema = new mongoose.Schema({
  name: {
    type: String
  },
  rating: {
    type: Number
  }
})

module.exports = mongoose.model('Workspace', workspaceSchema)
