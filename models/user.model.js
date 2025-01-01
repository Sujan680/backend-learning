
// Importing required modules
const mongoose = require("mongoose");

// Creating a schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Creating a model
const userModel = mongoose.model("userModel", userSchema);

// Exporting the model
module.exports = userModel;
