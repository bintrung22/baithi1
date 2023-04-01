const productModel = require("../models/productModel");

const getAllProduct = async(req,res)=>{
    const product = await productModel.find({});
    if(product){
        res.send(product);
    }else {
        res.status(401);
        req.send("khong lay duoc dl");
      }
}
const getProductLowQuantity = async(req,res)=>{
    const product = await productModel.find({instock:{$lt : 100}});
    if(product){
        res.send(product);
    }else {
        res.status(401);
        req.send("khong lay duoc dl");
      }
}
  
module.exports = {getAllProduct, getProductLowQuantity}
