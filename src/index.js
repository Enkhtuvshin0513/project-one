import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Player } from "./db/models/Player.js";
import { Team } from "./db/models/Team.js";
import { Users } from "./db/models/User.js";
import jwt from "jsonwebtoken";

dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

mongoose.connect(url).then(() => {
  console.log("mongo connected");
});

const app = express();

const authMiddleware = (req, res, next) => {
  if (["/login", "/register"].includes(req.url)) {
    return next();
  }
  const authtoken = req.headers["authorization"];
  const token = authtoken.split(" ")[1];

  if (!authtoken || !authtoken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided or invalid format." });
  }

  const user = jwt.verify(token, "secret");

  req.user = user;

  next();
};

app.use(authMiddleware);

app.post("/", async (req, res) => {
  try {
    const user = await Users.register({
      password: "21312312",
      username: "12312"
    });
    console.log(user);
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.post("/login", async (req, res) => {
  const token = await Users.login();

  res.send(token);
});

app.get("/", async (req, res) => {
  const player = await Player.find({ lastName: "dorj" }).populate("team");

  res.send(player);
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
