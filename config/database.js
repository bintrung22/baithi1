const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const dbConfig = "mongodb://127.0.0.1/baithi";
    const connect = await mongoose.connect(dbConfig);
    console.log(`mongodb connected: ${connect.connection.host}`);
  } catch (e) {
    console.log("ko ket noi duoc: ", e);
  }
};

module.exports = connectDatabase;
