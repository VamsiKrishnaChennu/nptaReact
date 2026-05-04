const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uid: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date }
})

const userModel = mongoose.model("users", userSchema);

module.exports = {userModel};

