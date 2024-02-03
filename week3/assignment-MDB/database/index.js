// Establishing the mongoDB connection for user and admin and the books.

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/course_selling_app');

const adminSchema = new mongoose.Schema({
    username : String,
    password : String

});
const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    cousres : [{
type : mongoose.Schema.Types.ObjectId,
ref:"Course"
    }]

});

const course = ({
    title:String,
    price:Number,
});

const Admin =  mongoose.model("Admin", adminSchema);
const User =  mongoose.model("User", userSchema);
const Cousre =  mongoose.model("Course", course);