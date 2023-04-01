var express = require('express');
const { registerUser, authLogin } = require('../controller/userController');
var router = express.Router();

router.post("/",registerUser);
router.post("/login",authLogin);

module.exports = router;
