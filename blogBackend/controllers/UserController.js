const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("../models/User");

try {
    mongoose.connect(
        "mongodb+srv://user:userpass@main-qk5ta.mongodb.net/blog?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
} catch {
    console.log("Connection Error");
}

const User = mongoose.model("user");

const getAllUsers = (req, res) => {
    User.find({})
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

const getUserByName = (req, res) => {
    const isLogged = false;

    const receivedUsername = req.body.username;
    const receivedUserPassword = req.body.password;

    User.findOne({ username: receivedUsername })
        .then((result) => {
            if (receivedUserPassword === result.password) {
                res.send(!isLogged);
            } else {
                res.send(isLogged);
            }
        })
        .catch((err) => {
            console.log(err);
            res.send(false);
        });
};

module.exports = {
    getAllUsers,
    getUserByName,
};
