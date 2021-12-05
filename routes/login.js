const express = require("express");
const loginController = require("../controllers/loginController");


const router = express.Router();

router.route("/:id").post(loginController.login);

module.exports = router;
