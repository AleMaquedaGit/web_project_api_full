import express from "express";
import mongoose from "mongoose";
import cards from "./routes/card.js";
import users from "./routes/user.js";

const app = express();
app.use(
  cors({
    origin: [
      "http//localhost:3000",
      "https://api.miproyectotripleten.mooo.com",
    ],
  }),
);
app.use(express.json());
const PORT = 3000;
await mongoose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => console.log("conectado a Mongo"));

app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133", // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});

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
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
