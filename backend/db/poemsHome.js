const mongoose = require('mongoose')

const PoemsHomeSchema = new mongoose.Schema({

    name: String,
    title: String,
    subtitle: String

})
module.exports = mongoose.model('poemshomes', PoemsHomeSchema)