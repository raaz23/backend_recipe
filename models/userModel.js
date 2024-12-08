import { url } from "inspector";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
},{timestamps: true});
const userModel = new mongoose.model("Users", userSchema);
export default userModel;
