const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://betweenthree21:dd3EI4DTIcYCj4A0@cluster0.svmm229.mongodb.net/ByjusDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adminSchema = mongoose.Schema({
  username: String,
  password: Number,
});

const userSchema = mongoose.Schema({
  username: String,
  password: Number,
  purchasedCourses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
  },
});

const courseSchema = mongoose.Schema({
  title: String,
  price: Number,
});

const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
const Courses = mongoose.model("Courses", courseSchema);

module.exports = { Admin, User, Courses };
