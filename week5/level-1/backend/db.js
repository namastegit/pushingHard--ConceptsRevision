const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://net/carduser");

const userSchema = mongoose.Schema({
    id : Number,
    username: String,
    description : String,

    interest1 : String,
    interest2 : String,
    interest3 : String
,
link1 : String,
link2 : String
});

const USERSCHEMA = mongoose.model("USER", userSchema);

module.exports = {
    USERSCHEMA : USERSCHEMA
}