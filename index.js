
// importing the express module
const express= require("express");

// having acces to differents methods
const app=express()


// necessary for the PUT and POST methods so we can read the body of the request as a json format
app.use(express.json());



// setting the enviroment on a Localhost 5000 or a default port 
const port=process.env.PORT || 5000
app.listen(port,()=>console.log(`server is running on port ${port}`))
 