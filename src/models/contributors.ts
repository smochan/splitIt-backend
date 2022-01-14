import { model, Schema } from 'mongoose';
import Expenses from './expenses';
import User from './user';
import { Contributors } from './@types/contributors';

const contributorsSchema = new Schema({
  expenseID: { type: Schema.Types.ObjectId, ref: Expenses },
  userID: { type: Schema.Types.ObjectId, ref: User },
  percent: Number,
  status: Boolean,
});

export default model<Contributors>("Contributors", contributorsSchema);
