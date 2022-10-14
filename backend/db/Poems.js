const mongoose = require('mongoose')

const PoemHome = new mongoose.Schema({
    name: String,
    title: String,
    subtitle: String
})

module.exports = mongoose.model('poems', PoemHome)