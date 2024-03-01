const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://betweenthree21:dd3EI4DTIcYCj4A0@cluster0.svmm229.mongodb.net/TodoAppRevision");

const todoschema = mongoose.Schema({
    title: String,
    description: String,
    isDone: Boolean
});



const TODO = mongoose.model("TODO", todoschema);

module.exports = {

    TODO: TODO
};
