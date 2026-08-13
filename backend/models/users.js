import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlenght: 2,
      maxlenght: 30,
      default: "Usuario",
    },
    about: {
      type: String,
      required: true,
      minlenght: 2,
      maxlenght: 30,
      default: "Agrega tu descripción",
    },
    avatar: {
      type: String,
      required: true,
      default:
        "https://images.pexels.com/photos/7241592/pexels-photo-7241592.jpeg",
    },
    email: { type: String, required: true },
    password: { type: String, required: true, minlenght: 2, maxlenght: 30 },
  }),
);

export default User;
