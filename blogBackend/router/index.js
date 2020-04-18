const express = require("express");
const {
    postController,
    tutorialController,
    userController,
} = require("../controllers");

const router = express.Router();

router.get("/posts", postController.getAllPosts);
router.get("/posts/:id", postController.getPostById);
router.get("/tutorials", tutorialController.getAllTutorials);
router.get("/tutorials/:id", tutorialController.getTutorialById);

router.put("/updatePost/:id", postController.updatePost);

router.post("/posts/add", postController.addPost);
router.post("/users", userController.getAllUsers);
router.post("/getUser", userController.getUserByName);

router.delete("/deletePost/:id", postController.deletePost);

module.exports = router;
