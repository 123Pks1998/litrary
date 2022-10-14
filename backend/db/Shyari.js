const mongoose = require('mongoose')

const ShyariHome = new mongoose.Schema({
    name: String,
    title: String,
    subtitle: String
})

module.exports = mongoose.model('shyarihomes', ShyariHome)