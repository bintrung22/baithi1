const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  
    sku: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  instock:{
    type: Number,
    require: true,
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
