
const jwt = require("jsonwebtoken");

const authenticate = (userId) =>
  jwt.sign(userId, process.env.ACCESS_TOKEN_EXAMPLE);

module.exports = authenticate;
