import mongoose from "mongoose";

const { Schema } = mongoose;

export const userSchema = new Schema(
  {
    username: { type: String, optional: false, unique: true },
    password: {
      type: String,
      optional: false,
      minlength: 6
    }
  },
  { collection: "users" }
);
