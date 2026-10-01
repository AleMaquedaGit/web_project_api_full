import express from "express";
import mongoose from "mongoose";
import cards from "./routes/card.js";
import users from "./routes/user.js";
import cors from "cors";
import auth from "./middlewares/auth.js";
import { createUser, login } from "./controllers/users.js";
import { celebrate, Joi, Segments, errors } from "celebrate";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5107",
      "http://localhost:5173",
      "https://miproyectotripleten.mooo.com",
    ],
  }),
);

app.use(express.json());

const PORT = 3000;

await mongoose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => console.log("conectado a Mongo"));

app.post(
  "/signUp",
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().min(2).max(18),
      email: Joi.string().email().required(),
      age: Joi.number().integer().min(18),
      about: Joi.string().min(2).max(18),
      password: Joi.string().min(2).max(128).required(),
    }),
  }),
  createUser,
);
app.post("/signIn", login);

app.use(auth);

app.use("/cards", cards);
app.use("/users", users);
app.use(errors());
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando de Alejandro 🚀");
});

app.get("/usuarios", (req, res) => {
  res.json({ mensaje: "Lista de usuarios" });
});

app.listen(PORT, () => {
  console.log(`prueba http://localhost:${PORT}`);
});
