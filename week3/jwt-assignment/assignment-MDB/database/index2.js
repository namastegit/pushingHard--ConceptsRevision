// Ensure that you have required mongoose in this file
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adminSchema = mongoose.Schema({
  username: String,
  password: String, // Change to String for password and consider using bcrypt for hashing
});

const userSchema = mongoose.Schema({
  username: String,
  password: String, // Change to String for password and consider using bcrypt for hashing
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
  }],
});

const courseSchema = mongoose.Schema({
  title: String,
  price: Number,
});

const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
const Courses = mongoose.model("Courses", courseSchema);

module.exports = { Admin, User, Courses };
