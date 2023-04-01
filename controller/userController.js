const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      res.status(400);
        res.send("da co gmail");
    }
    const newUser = await userModel.create({  email, password });
    if (newUser) {
      res.status(200).json({
        email: newUser.email,
        password: newUser.password,
      });
    } else {
      res.status(400);   
      res.send("khong tạo dược ");
    }
  };

  const authLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user && password === user.password) {
      res.json({
       
        name: user.name,
        email: user.email,
        token: jwt.sign({ id: user._id }, "masobimat", {
          expiresIn: "1d",
        }),
      });
    } else {
      res.status(401);
      req.send("Invalid email or password");
    }
  };
  

module.exports = {registerUser, authLogin}
