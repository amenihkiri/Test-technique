const mongoose=require('mongoose')
// const config=require('config')
const mongoUri=require("./default.json");

const connectDb = async () => {
    try {
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`💾 is connected ...`);
    } catch (error) {
      console.error(error);
    }
  };
  module.exports=connectDb

// const connectDB=()=>{


//     mongoose.connect(config.get("mongoUri"))
//     .then(()=> console.log("mongoose connected"))
//     .catch(err=>console.log('err'))
// }

//     module.exports=connectDB


