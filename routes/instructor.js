const express= require("express");
const router =express.Router();
const Instructor=require("../models/instructors")


//add instructor
router.post("/" , async (req, res)=>{
    const{instructor,date,timeTable,nbTracks}=req.body 
  
    try {
      const newinstructor=new Instructor({
        instructor,
        date,
        timeTable,
        nbTracks
    })
    await newinstructor.save() 
    res.send(newinstructor)
      
    } catch (error) {
      console.log(error)
      res.send({msg :"error"})
    }
  
  })



// get instructors
router.get("/")



module.exports=router