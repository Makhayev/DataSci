import type { Document, Model } from "mongoose";
import mongoose, { model, Schema } from "mongoose";

export interface UserType extends Document {
  email: string;
  name: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

export const User = (mongoose.models.User ||
  model("User", UserSchema)) as Model<UserType>;
