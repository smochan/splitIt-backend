const mongoose = require('mongoose');
const { User } = require('./user');
const { Group } = require('./group');

const expensesSchema = new mongoose.Schema({
  groupID: { type: mongoose.Schema.ObjectId, ref: Group },
  comment: String,
  payer: { type: mongoose.Schema.ObjectId, ref: User },
  contributors: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  amount: Number,
  date: { type: Date, default: Date.now },
  status: Boolean,
});

module.exports = mongoose.model('Expense', expensesSchema);
