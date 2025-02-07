import mongoose from "mongoose";
import { teamSchema } from "../schemas/teamSchema.js";

export const Team = mongoose.model("Team", teamSchema);
