const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
