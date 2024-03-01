const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://betweenthree21:dd3EI4DTIcYCj4A0@cluster0.svmm229.mongodb.net/TodoAppRevision2");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
});

const todoschema = mongoose.Schema({
    title: String,
    description: String
});

const USER = mongoose.model("USER", userSchema);
const TODO = mongoose.model("TODO", todoschema);

module.exports = {
    USER: USER,
    TODO: TODO
};
