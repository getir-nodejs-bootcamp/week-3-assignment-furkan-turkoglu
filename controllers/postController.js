const postDb = require("../models/postDb");
const logRequests = require("../utils/helper");

// GET FUNCTION FOR GETTING ALL POSTS IN DB
exports.getAllPosts = async (req, res) => {
  console.log(req.body);
  try {
    const posts = await postDb;
    if (posts) {
      res.status(200).json(posts);
      logRequests(req.url, "All posts fetched");
    } else {
      res.status(404).send(`Posts couldn't fetched...`);
      logRequests(req.url, "Posts couldn't fetched...");
    }
  } catch (error) {
    console.log(error);
    // res.error("Couldn't get posts!");
  }
};

// GET FUNCTION FOR GETTING ONE POST WITH REQUESTED ID
exports.getPost = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log(id);

  try {
    const post = await postDb.find((post) => id == post.id);
    if (post) {
      res.status(200).json(post);
      logRequests(req.url, `Post with id ${id} fetched...`);
    } else {
      res.status(404).send(`Post with id ${id} couldn't fetched...`);
      logRequests(req.url, `Posts with id ${id} couldn't fetched...`);
    }
  } catch (error) {
    console.log(error);
  }
};

// POST FUNCTION FOR CREATING NEW POST
exports.createPost = async (req, res) => {
  const post = req.body;
  console.log(post);

  try {
    const newPost = {
      userId: post.userId,
      id: postDb.length + 1,
      title: post.title,
      body: post.body,
    };
    await postDb.push(newPost);
    console.log(postDb);
    res.status(201).json(newPost);
    logRequests(req.url, `Post with id ${newPost.id} created...`);
  } catch (error) {
    console.log(error);
  }
};

// PATCH FUNCTION FOR UPDATING POST WITH REQUESTED ID
exports.updatePost = async (req, res) => {
  const post = req.body;
  const id = req.params.id;
  try {
    const updatedPostIndex = await postDb.findIndex((post) => id == post.id);
    console.log(post.body);
    if (updatedPostIndex !== -1) {
      postDb[updatedPostIndex] = {
        userId: post.userId,
        id: Number(id),
        title:
          post.title != undefined ? post.title : postDb[updatedPostIndex].title,
        body:
          post.body != undefined ? post.body : postDb[updatedPostIndex].body,
      };
      console.log(postDb);
      console.log(post.body);
      res.status(200).json(postDb[updatedPostIndex]);
      logRequests(req.url, `Post with id ${id} updated...`);
    } else {
      res.status(404).send("Post couldn't updated...");
      logRequests(req.url, "Posts couldn't updated...");
    }
  } catch (error) {
    console.log(error);
  }
};

// PUT FUNCTION FOR CHANGING POST WITH REQUESTED ID
exports.recreatePost = async (req, res) => {
  const post = req.body;
  const id = req.params.id;
  try {
    const recreatedPostIndex = await postDb.findIndex((post) => id == post.id);
    console.log(post.title, post.body);
    if (recreatedPostIndex !== -1) {
      postDb[recreatedPostIndex] = {
        userId: post.userId,
        id: Number(id),
        title: post.title == undefined ? "" : post.title,
        body: post.body == undefined ? "" : post.body,
      };
      console.log(postDb);
      console.log(post.body);
      res.status(200).json(postDb[recreatedPostIndex]);
      logRequests(req.url, `Post with id ${id} changed...`);
    } else {
      res.status(404).send("Post couldn't changed...");
      logRequests(req.url, "Post couldn't changed...");
    }
  } catch (error) {
    console.log(error);
  }
};

// DELETE FUNCTION FOR DELETING POST WITH REQUESTED ID
exports.deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedPostIndex = await postDb.findIndex((post) => id == post.id);
    if (deletedPostIndex !== -1) {
      postDb.splice(deletedPostIndex, 1);
      console.log(deletedPostIndex);
      console.log(postDb);
      res.status(200).send(`Post with id:${id} deleted`);
      logRequests(req.url, `Post with id ${id} deleted...`);
    } else {
      res.status(404).send("Post couldn't deleted...");
      logRequests(req.url, "Post couldn't deleted...");
    }
  } catch (error) {
    console.log(error);
  }
};
