
const mongoose= require("mongoose");
const config=require("config");



const MONGO_URL=config.get("MONGO_URL");

const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`💾 is connected ...`);
    } catch (error) {
      console.error(error);
    }
  };
 
  module.exports=connectDB