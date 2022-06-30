import { model, Schema } from 'mongoose';
import  User from './user';
import  Group from './group';
import { IExpenses } from "./@types/expenses"

const expensesSchema = new Schema({
  groupID: { type: Schema.Types.ObjectId, ref: Group },
  comment: String,
  payer: { type: Schema.Types.ObjectId, ref: User },
  contributors: [{userID: {type: Schema.Types.ObjectId, ref: User}, percent: Number, status: Boolean}],
  amount: Number,
  date: { type: Date, default: Date.now },
  status: Boolean,
});

export default model<IExpenses>("Expenses", expensesSchema)