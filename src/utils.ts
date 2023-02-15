import type { ConnectOptions } from "mongoose";
import { connect } from "mongoose";
const {
  // Attempts to connect to MongoDB and then tries to connect locally:)
  MONGO_URI = "mongodb://localhost:27017/next_test",
} = process.env;

console.log(process.env.MONGO_URI);
const options: unknown = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export const connectToDatabase = async () => {
  console.log(MONGO_URI);
  console.log("Connecting to ", MONGO_URI);
  connect(MONGO_URI, options as ConnectOptions).then(() =>
    console.log("connected to db"),
  );
};
