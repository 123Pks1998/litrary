const mongoose = require('mongoose')

const PoetHome = new mongoose.Schema({
    name: String,
    about: String,
    subtitle: String
})
module.exports = mongoose.model('poethomes', PoetHome)