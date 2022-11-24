const mongoose= require('mongoose')
const shortVideoSchema=mongoose.Schema({
    url:String,
    channel: String,
    description:String,
    song:String,
    likes:String,
    messages:String
})
module.exports=mongoose.model('shortVideos', shortVideoSchema)