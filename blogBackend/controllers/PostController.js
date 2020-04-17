const mongoose = require("mongoose");
require("../models/Post");

try {
    mongoose.connect(
        "mongodb+srv://user:userpass@main-qk5ta.mongodb.net/blog?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
} catch {
    console.log("Connection Error");
}

const Post = mongoose.model("post");

const getAllPosts = (req, res) => {
    Post.find({})
        .then((posts) => res.send(posts))
        .catch((err) => console.log(err));
};
const addPost = (req, res) => {
    const newPost = new Post(req.body);

    newPost.save((err, post) => {
        if (err) {
            res.status("404").json({
                error: "Post can't be added.",
            });
        } else {
            res.send(post);
        }
    });
};

const deletePost = (req, res) => {
    const postId = req.params.id;

    Post.findByIdAndRemove(postId)
        .then((result) => {
            if (!result) {
                res.send("There is no post with this id");
            } else {
                res.send(result);
            }
        })
        .catch((err) => res.send(err));
};

const updatePost = (req, res) => {
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
    };
    Post.findByIdAndUpdate(req.params.id, updatePost)
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

const getPostById = (req, res) => {
    const postId = req.params.id;

    Post.findById(postId)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};
module.exports = {
    getAllPosts,
    addPost,
    deletePost,
    updatePost,
    getPostById,
};
