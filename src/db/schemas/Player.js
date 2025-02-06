import mongoose from "mongoose";
const { Schema } = mongoose;

const playerHobbySchema = new Schema(
  {
    team: String,
    awards: Array
  },
  { _id: false }
);

const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    validate: {
      message: "nas 16 gaas deesh baih ystoi",
      validator: data => {
        return data > 16;
      }
    }
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },

  history: [playerHobbySchema],
  historyObject: playerHobbySchema
});

export const Player = mongoose.model("player", playerSchema);
