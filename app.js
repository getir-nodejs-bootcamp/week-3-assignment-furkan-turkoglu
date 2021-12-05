// IMPORT REQUIRED DEPENDENCIES AND LIBRARIES
require("dotenv").config();
const express = require("express");
const postRoute = require("./routes/post");
const loginRoute = require("./routes/login");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// ROUTES FOR POSTS
app.use("/posts", postRoute);
app.use("/login", loginRoute);
app.use("*", function (req, res) {
  res.status(404).send("404 PAGE NOT FOUND");
});

// PORT DECLARED
const port = 8000;

// LISTENING SERVER
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
