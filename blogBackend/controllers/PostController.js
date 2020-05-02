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
    // setTimeout(() => {
    //     Post.find({})
    //         .then((posts) => res.send(posts))
    //         .catch((err) => console.log(err));
    // }, 5000);

    Post.find({})
        .then((posts) => res.send(posts))
        .catch((err) => console.log(err));
};
const addPost = async (req, res) => {
    // try {
    //     const newPost = await new Post(req.body).save((err, post) => {
    //         res.send(post);
    //     });
    // } catch (err) {
    //     console.log(err);
    // }

    const newPost = new Post(req.body);

    newPost.save((err, Post) => {
        if (err) {
            return console.log(err);
        } else {
            res.send(Post);
        }
    });
};

const deletePost = (req, res) => {
    const postId = req.params.id;

    Post.findByIdAndRemove(postId)
        .then((result) => {
            if (!result) {
                res.send("There is no post with this ID");
            } else {
                res.send(result);
            }
        })
        .catch((err) => res.send(err));
};

const updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
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
