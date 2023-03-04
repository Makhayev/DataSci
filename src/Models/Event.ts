import type { Document, Model } from "mongoose";
import mongoose, { model, Schema } from "mongoose";

export interface EventType extends Document {
  description: string;
  guestName: string;
  imageUrl: string;
  topic: string;
}

const EventSchema: Schema = new Schema({
  topic: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  guestName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Event = (mongoose.models.Event ||
  model("Event", EventSchema)) as Model<EventType>;
