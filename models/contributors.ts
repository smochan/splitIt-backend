const mongoose = require('mongoose');
// const { Expense } = require('./expenses');
// const { User } = require('./user');

const contributors = new mongoose.Schema({
  expenseID: { type: mongoose.Schema.ObjectId, ref: Expense },
  userID: { type: mongoose.Schema.ObjectId, ref: User },
  amount: Number,
  status: Boolean,
});

module.exports = mongoose.model('Contributors', contributors);
