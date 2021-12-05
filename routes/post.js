const express = require("express");
const postController = require("../controllers/postController");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.route("/").get(authenticate, postController.getAllPosts);
router.route("/").post(authenticate, postController.createPost);
router.route("/:id").get(authenticate, postController.getPost);
router.route("/:id").patch(authenticate, postController.updatePost);
router.route("/:id").put(authenticate, postController.recreatePost);
router.route("/:id").delete(authenticate, postController.deletePost);

module.exports = router;
