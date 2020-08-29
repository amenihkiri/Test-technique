const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const InstructorSchema= new Schema ({
    instructor : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true,
        default:Date.now()
    },
    timeTable :{
        type: String,
        required: true 
},
    nbTracks :{
type: Number,
required :true
   }

})
module.exports= Instructor=mongoose.model("instructors",InstructorSchema)