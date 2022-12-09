const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    caption: String,
    user: {
        type:String,
        default:'Trường Dương'
    } , 
    image: String
})

const Post = mongoose.model('Post',postSchema)
module.exports = Post