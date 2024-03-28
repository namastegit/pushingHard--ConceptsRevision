
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://betweenthree21:dd3EI4DTIcYCj4A0@cluster0.svmm229.mongodb.net/paytmfrontend");

const userSchema = new mongoose.Schema({

    username: String,
    firstname: String,
    lastname: String,
    password: String,
});

const accountSchema = new mongoose.Schema({
    userId: String, 
    balance: Number,
    token : String,
});
const User = mongoose.model("USER", userSchema);
const Account = mongoose.model("ACCOUNT", accountSchema);

module.exports ={
User:User,
Account:Account,
}
