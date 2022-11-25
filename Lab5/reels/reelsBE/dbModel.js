const mongoose= require('mongoose')
const shortVideoSchema=mongoose.Schema({
    url:String,
    channel: String,
    description:String,
    song:String,
    likes:String,
    shares:String,
    messages:String
})
const dbModel=mongoose.model('dbModel', shortVideoSchema)

module.exports = dbModel;