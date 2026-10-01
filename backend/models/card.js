import mongoose from "mongoose";

const card = mongoose.model(
  "card",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },

    link: {
      type: String,
      required: true,
      match: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],

    default: [],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }),
);

export default card;
