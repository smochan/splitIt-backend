import { model, Schema } from 'mongoose';
import User from "./user";
import { Group } from "./@types/group";

const groupSchema = new Schema({
  gName: String,
  members: [{ type: Schema.Types.ObjectId, ref: User }],
});

export default model<Group>("Group", groupSchema);