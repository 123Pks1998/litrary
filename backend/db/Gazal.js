const mongoose = require('mongoose')

const gazalSchema = new mongoose.Schema({
    name: String,
    title: String,
    subtitle: String
})
module.exports = mongoose.model('gazalhomes', gazalSchema)