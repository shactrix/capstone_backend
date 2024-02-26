const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    text: {type: String},
    image: String,
    },
)

module.exports = Post = mongoose.model("Post", PostSchema);