import mongoose from "mongoose";
import { playerSchema } from "../schemas/playerSchema.js";

export const Player = mongoose.model("Player", playerSchema);
