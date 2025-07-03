const express = require('express');
const app = express();
const connectdb = require('../config/database');
const UserModel = require('../models/user');

app.use(express.json());

// POST: Signup
app.post('/signup', async (req, res) => {
  const user = new UserModel(req.body);

  try {
    await user.save();
    res.status(201).send("User added successfully");
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// GET: Fetch user by email (using query param)
app.get('/feeduser', async (req, res) => {
  try {
    const userEmail = req.body.emailId// e.g., /feeduser?emailId=test@example.com
    const user = await UserModel.find({ emailId: userEmail });
    res.status(200).send(user);
  } catch (err) {
    console.error("Something went wrong:", err.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
// get : fetch all users 
app.get('/feedallUsers',async(req,res)=>{
  const allusers=await UserModel.find({})
  res.status(200).send(allusers)
})



//delete :user
app.delete('/deleteuser',async(req,res)=>{
  const userId = req.body.userId
try {

  const user=await UserModel.findByIdAndDelete(userId)
  res.status(200).send("user deleted successfully")
  
} catch (error) {
  res.status(400).send("something went wrong")
}


})

//update user


app.patch('/updateuser',async(req,res)=>{

const userId=req.body.userId
const data=req.body

try {
  
  const user=await UserModel.findByIdAndUpdate({_id:userId},data)
  console.log(user)
  res.status(200).send("user updated successfully")
} catch (error) {
res.status(400).send("something went wrong")  
}
})

// Connect DB and Start Server
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
