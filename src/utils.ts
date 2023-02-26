import type { ConnectOptions } from "mongoose";
import { connect } from "mongoose";
const {
  // Attempts to connect to MongoDB and then tries to connect locally:)
  MONGO_URI = "mongodb://localhost:27017/next_test",
} = process.env;

const options: unknown = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export const connectToDatabase = async () => {
  connect(MONGO_URI, options as ConnectOptions).then(() =>
    console.log("connected to db"),
  );
};
