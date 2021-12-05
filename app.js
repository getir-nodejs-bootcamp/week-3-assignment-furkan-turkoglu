// IMPORTING REQUIRED DEPENDENCIES AND LIBRARIES
const express = require("express");
const postController = require("./controllers/postControllers");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// ROUTES FOR POSTS
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.patch("/posts/:id", postController.updatePost);
app.put("/posts/:id", postController.recreatePost);
app.delete("/posts/:id", postController.deletePost);

// PORT DECLARED
const port = 8000;

// LISTENING SERVER
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
