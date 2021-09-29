const mongoose = require("mongoose");
const { Amount } = require("./amount");
const { Group } = require("./group");

const contributors = new mongoose.Schema({
  expenseID: { type: mongoose.Schema.ObjectId, ref: Amount},
  userID: { type: mongoose.Schema.ObjectId, ref: Group },
  amount: Number,
  status: Boolean
});

module.exports = mongoose.model("Contributors", contributors);