const express = require('express');
const app = express();
const connectdb = require('../config/database');
const UserModel=require('../models/user')



app.post('/signup',async (req,res)=>{
  const user= new UserModel({
    firstName :"virat",
    lastName:"mahesh",
    emailId:"saimahesh@gmai.com"

  })

  try{
     await user.save()
  res.send("user added")
  }
 catch(err){
  res.status(401).send("error message",+ err.message)
 }


})


connectdb()
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is started on port 3000");
    });
  })
  .catch(err => {
    console.log("MongoDB error:", err);
  });
