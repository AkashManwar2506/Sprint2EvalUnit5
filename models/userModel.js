const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email : {type: String, required: true, unique: true},
    pass : {type: String, required: true},
    name : {type: String, required: true},
    role : {type: String, required: true, enum: ["User", "Moderator"], default: "User"}
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel