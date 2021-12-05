const express = require("express");
const loginController = require("../controllers/loginController");


const router = express.Router();

router.route("/:id").get(loginController.login);

module.exports = router;
