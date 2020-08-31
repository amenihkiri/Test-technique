const express = require("express");
const router = express.Router();
const Instructor = require("../models/instructors");

//add instructor
router.post("/", async (req, res) => {
  const { instructor, date, timeTable, nbTracks } = req.body;
  try {
    const newInstructor = new Instructor({
      instructor,
      date,
      timeTable,
      nbTracks,
    });
    await newInstructor.save();
    res.send(newInstructor);
  } catch (error) {
    console.log(error);
    res.send({ msg: "error" });
  }
});

// get instructors
router.get("/", async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//update instructor
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    //find instructor by id and update
    const updatedInstructor = await Instructor.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true } 
    );
    res.json(updatedInstructor);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//delete instructor
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedInstructor = await Instructor.findByIdAndDelete({ _id: id });
    res.json(deletedInstructor);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
