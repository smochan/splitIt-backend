const mongoose = require("mongoose");
const { User } = require("./user");
const { Amount } = require("./amount");

const group = new mongoose.Schema({
  groupName: String,
  member: [{ type: mongoose.Schema.ObjectId, ref: User }],
  amount: [{ type: mongoose.Schema.ObjectId, ref: Amount }],
});

module.exports = mongoose.model("Group", group);
