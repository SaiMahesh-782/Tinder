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
    const user = await UserModel.findOne({ emailId: userEmail });
    res.status(200).send(user);
  } catch (err) {
    console.error("Something went wrong:", err.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

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
