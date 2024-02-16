const mongoose = require("mongoose");

mongoose.connect();

const todoSchema = mongoose.Schema({
    title:String,
    description:String
});