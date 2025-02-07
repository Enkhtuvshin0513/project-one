import { playerSchema } from "../schemas/playerSchema.js";

export const Player = mongoose.model("player", playerSchema);
