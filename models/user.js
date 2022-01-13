const mongoose = require("mongoose");
import { Group } from "./group";

const user = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: Number,
  // friends?: Array,
  groups?: [{ type: mongoose.Schema.ObjectId, ref: Group}]
});

module.exports = mongoose.model("User", user);
