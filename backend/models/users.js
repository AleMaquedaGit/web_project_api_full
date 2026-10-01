import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,

      minlenght: 2,
      maxlenght: 30,
      default: "Usuario",
    },
    about: {
      type: String,

      minlength: 2,
      maxlength: 30,
      default: "Agrega tu descripción",
    },
    avatar: {
      type: String,

      default:
        "https://images.pexels.com/photos/7241592/pexels-photo-7241592.jpeg",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 128,
      select: false,
    },
  }),
);

export default User;
