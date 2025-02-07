import mongoose from "mongoose";
const { Schema } = mongoose;

export const teamSchema = new Schema(
  {
    name: String
  },
  { collection: "team" }
);
