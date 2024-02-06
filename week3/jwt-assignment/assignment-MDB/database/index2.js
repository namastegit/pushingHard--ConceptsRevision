const mongoose = require("mongoose");

mongoose.connect();

const adminSchema = mongoose.Schema({
    username:String,
    password:Number
});
 const userSchema = mongoose.Schema({
    username:String,
    password:Number,
    purchasedCourses:({
type:mongoose.Schema.Types.ObjectId,
ref:"Courses"
    })
 });

 const courseSchema = mongoose.Schema({
    title:String,
    price:Number
 });

 const Admin = new mongoose.Model("Admin", adminSchema);
 const User = new mongoose.model("User", userSchema);
 const Courses = new mongoose.model("Courses", courseSchema);

 

