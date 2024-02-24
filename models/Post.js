const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: {type: String},
    username: {type: String},
    text: {type: String},
    image: String,
    date: {type: Date, default: Date.now},
    likes: Number,
    recrypts: Number,
    comments: Number,
},
    {
        timestamps: true,
    }
)

module.exports = Post = mongoose.model("Post", PostSchema);