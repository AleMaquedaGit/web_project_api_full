import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true, minlenght: 2, maxlenght: 30 },
    about: { type: String, required: true, minlenght: 2, maxlenght: 30 },
    avatar: { type: String, required: true },
  }),
);

export default User;
