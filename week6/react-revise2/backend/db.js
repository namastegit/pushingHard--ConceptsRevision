const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://betweenthree21:dd3EI4DTIcYCj4A0@cluster0.svmm229.mongodb.net/TodoAppRevision2");

const userSchema = mongoose.Schema({
    username : String,
    password : String
});

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    isDone : Boolean,
});

const User1 = mongoose.model("User", userSchema);
const Todo1 = mongoose.model("Todo", todoSchema);

module.exports = {
    User1 : User1,
    Todo1 : Todo1
}