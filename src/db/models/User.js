import mongoose from "mongoose";
import { userSchema } from "../schemas/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class User {
  static async register(doc) {
    const salt = await bcrypt.genSalt(10);
    doc.password = await bcrypt.hash(doc.password, salt);

    const user = this.create(doc);

    return user;
  }

  static async login(doc) {
    const user = await this.findOne({});

    const valid = await bcrypt.compare("21312312", user.password);

    if (valid) {
      const token = jwt.sign({ user }, "secret");
      return token;
    }

    throw new Error("Not valid");
  }
}

userSchema.loadClass(User);

export const Users = mongoose.model("Users", userSchema);
