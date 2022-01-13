const mongoose = require("mongoose");
const { User } = require("./user");

const group = new mongoose.Schema({
  gName: String,
  members: [{ type: mongoose.Schema.ObjectId, ref: User }],
});

module.exports = mongoose.model("Group", group);
