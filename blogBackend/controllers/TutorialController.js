const mongoose = require("mongoose");
require("../models/Tutorial");

try {
    mongoose.connect(
        "mongodb+srv://user:userpass@main-qk5ta.mongodb.net/blog?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
} catch {
    console.log("Connection Error");
}

const Tutorial = mongoose.model("tutorial");

const getAllTutorials = (req, res) => {
    Tutorial.find({})
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

const getTutorialById = (req, res) => {
    const TutorialId = req.params.id;
    Tutorial.findById(TutorialId)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

module.exports = {
    getAllTutorials,
    getTutorialById,
};
