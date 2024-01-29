
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://betweenthree21:dd3EI4DTIcYCj4A0@cluster0.svmm229.mongodb.net/usernewapp");

// Define the model outside of the route handler -- defining schema
const myModel = mongoose.model("Userstable", {
  username: String,
  passward: String
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  try {
    const existingUser = await myModel.findOne({
      username: email
    });

    if (existingUser) {
      res.status(401).json({
        msg: "USER ALREADY EXISTS"
      });
    } else {
      const newuser = new myModel({
        username: email,
        passward: pass
      });

      await newuser.save();
      console.log('User saved successfully');
      res.status(200).json({
        msg: "USER SAVED SUCCESSFULLY"
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "INTERNAL SERVER ERROR"
    });
  }
});

app.listen(3030, () => {
  console.log("http://localhost:3030");
});
