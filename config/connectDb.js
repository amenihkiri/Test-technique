const mongoose = require("mongoose");
const config = require("config");

const MONGO_URI = config.get("MONGO_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`data base is connected ...`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
