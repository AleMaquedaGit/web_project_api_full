import express from "express";
import mongoose from "mongoose";
import cards from "./routes/card.js";
import users from "./routes/user.js";
import cors from "cors";
import auth from "./middlewares/auth.js";

const app = express();
app.use(cors());

/*const cors = require("cors");

app.use(
  cors({
    origin: "https://miproyectotripleten.mooo.com",
  }),
);
*/
app.use(
  cors({
    origin: ["http://localhost:5173/", "https://miproyectotripleten.mooo.com/"],
  }),
);

app.use(express.json());
const PORT = 3000;
await mongoose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => console.log("conectado a Mongo"));

app.use(auth);

app.use("/cards", cards);
app.use("/users", users);

// Middleware
app.use(express.json());

// Ruta básica
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando de Alejandro 🚀");
});
app.get("/usuarios", (req, res) => {
  res.json({ mensaje: "Lista de usuarios" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`prueba http://localhost:${PORT}`);
});
