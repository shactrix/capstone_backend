const db = require('../models/Index') 


// Index
const getPost = (req, res) => {
    db.Post.find({})
    .then((foundPost) => {
        if(!foundPost){
            res.status(404).json({message: 'Cannot find post'})
        } else {
            res.status(200).json({data: foundPost})
        }
    })
}

// Create
const createPost = (req, res) => {
    db.Post.create(req.body)
    .then((createdPost) => {
        if(!createdPost){
            res.status(400).json({message: 'Cannot create post'})
        } else {
            res.status(201).json({data: createdPost, message: 'Post created'})
        }
    })
}

// Update
const editPost = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedPost) => {
        if(!updatedPost){
            res.status(400).json({Message: 'Could not update post'})
        } else {
            res.status(200).json({Data: updatedPost, Message: 'Post updated'})
        }
    })
}

// Delete
const deletePost = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id)
    .then((deletedPost) => {
        if(!deletedPost){
            res.status(400).json({Message: 'Could not delete post'})
        } else {
            res.status(200).json({Data: deletedPost, Message: 'Post deleted'})
        }
    })
}

module.exports = {
    getPost,
    createPost,
    editPost,
    deletePost
}