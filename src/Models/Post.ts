import type { Document, Model } from "mongoose";
import mongoose, { model, Schema } from "mongoose";

export interface IPost extends Document {
  content: string;
  date: string;
  title: string;
}

const PostSchema: Schema = new Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const Post = (mongoose.models.Post ||
  model("Post", PostSchema)) as Model<IPost>;
