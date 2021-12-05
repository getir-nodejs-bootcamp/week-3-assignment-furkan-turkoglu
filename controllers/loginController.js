const authenticate = require("../utils/validate");

exports.login = async (req, res) => {
  const userId = req.params.id;
  const accessToken = authenticate(userId);
  res.json({ accessToken: accessToken });
};