import mongoose from "mongoose";

const card = mongoose.model(
  "card",
  new mongoose.Schema({
    name: { type: String, required: true, minlenght: 2, maxlenght: 30 },
    link: {
      type: String,
      required: true,
      match: /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg)$/i,
    },
    owner: { type: mongoose.Schema.Types.ObjectId },
    likes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "card",
        },
      ],
      default: [],
    },

    createdAt: { type: Date },
  }),
);
export default card;

//module.exports = mongoose.model("user", userSchema);
