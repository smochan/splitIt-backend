const mongoose = require("mongoose");
const { User } = require("./user");

const amountSchema = new mongoose.Schema({
  payer: { type: mongoose.Schema.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  amount: Number,
  comment: String,
  status: Boolean,
  contributors: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Amount", amountSchema);
