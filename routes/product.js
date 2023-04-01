var express = require('express');
const { getAllProduct, getProductLowQuantity } = require('../controller/productController');
const { login } = require('../middleware/login');
var router = express.Router();

router.get("/",getAllProduct)
router.get("/min", login, getProductLowQuantity);
module.exports = router;
