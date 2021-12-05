// IMPORTING REQUIRED DEPENDENCIES AND LIBRARIES
require("dotenv").config();
const express = require("express");
const postController = require("./controllers/postControllers");
const authenticate = require("./middlewares/authenticate");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// ROUTES FOR POSTS
app.get("/", authenticate, postController.getAllPosts);
app.get("/posts/:id", authenticate, postController.getPost);
app.post("/posts", authenticate, postController.createPost);
app.patch("/posts/:id", authenticate, postController.updatePost);
app.put("/posts/:id", authenticate, postController.recreatePost);
app.delete("/posts/:id", authenticate, postController.deletePost);
app.post("/login/:id", postController.login);

// PORT DECLARED
const port = 8000;

// LISTENING SERVER
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
