import { Schema, model } from "mongoose";

export type UserRole = "Trainer" | "Member";

const userSchema = new Schema({
  
});

export default model("User", userSchema);