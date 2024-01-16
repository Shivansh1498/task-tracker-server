import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const {
      connection: { host },
    } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connection established with: ${host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
