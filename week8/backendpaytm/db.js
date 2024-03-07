const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://betweenthree21:dd3EI4DTIcYCj4A0@cluster0.svmm229.mongodb.net/paytmfrontend");

const userSchema = mongoose.Schema({

    username: String,
    firstname: String,
    lastname: String,
    password: String,
});

const User = mongoose.model("USER", userSchema);

module.exports ={
User:User
}
