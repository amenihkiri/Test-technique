// importing the express module
const express = require("express");

const connectDb = require("./config/connectDb");

// having acces to differents methods
const app = express();

// Middelwares : necessary for the PUT and POST methods so we can read the body of the request as a json format
app.use(express.json());

// Connect the Data Base
connectDb();

// Routes
app.use("/instructors", require("./routes/instructors"));

// setting the enviroment on a Localhost 5000 or a default port
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) console.log("Error! : Server is not Running");
  console.log(`Server is Running on ${port}....`);
});
