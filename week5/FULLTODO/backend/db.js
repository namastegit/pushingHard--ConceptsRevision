const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect();

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