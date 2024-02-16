const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://betweenthree21:dd3EI4DTIcYCj4A0@cluster0.svmm229.mongodb.net/TodoApp");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed: Boolean
});
const todo = mongoose.model('todosTable', todoSchema
);

module.exports = {
    todo
}