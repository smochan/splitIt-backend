const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: Number,
});

module.exports = mongoose.model("User", user);
