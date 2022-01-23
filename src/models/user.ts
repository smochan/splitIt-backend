import { model, Schema } from 'mongoose';
import Group from "./group";
import { User } from "./@types/user";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  mobile: Number,
});

export default model<User>("User", userSchema);
