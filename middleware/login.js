const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const login = async (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log("trung1");
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const userVerify = jwt.verify(token, "masobimat");
      const userId = userVerify.id;
      const userInfo = await userModel.findById(userId).select("-password");
      req.user = userInfo;
      next();
    } catch (e) {
      res.status(401);
      req.send("ko the truy cap");
    }
  } else {
    res.status(401);
    req.send("ko the truy cap");
  }
};

module.exports = {
  login,
};
