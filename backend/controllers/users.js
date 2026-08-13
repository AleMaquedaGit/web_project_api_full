import User from "../models/users.js";
import bcrypt from "bcrypt";

export const getUsers =
  ("/",
  (req, res) => {
    User.find({})
      .orFail()
      .then((users) => {
        res.status(200).send(users);
      })
      .catch((error) => {
        res.status(500).send({ message: "server error", error: error });
      });
  });
export const getUsersId =
  ("/:id",
  (req, res) => {
    const { id } = req.params;

    User.findById(id)
      .orFail()
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User not found",
          });
        }

        res.status(200).send(user);
      })
      .catch((error) => {
        res.status(500).send({
          message: "server error",
          error: error,
        });
      });
  });

export const deleteUsers = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .orFail()
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      res.status(200).send({ message: "Usuario eliminado", user });
    })
    .catch((error) => {
      res.status(500).send({ message: "Error del servidor", error });
    });
};

////////
export const createUser = async (req, res, next) => {
  try {
    const { name, about, avatar, email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email y password son obligatorios" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name, // si no vienen, el modelo aplica defaults
      about,
      avatar,
      email,
      password: hash,
    });

    const data = user.toObject();
    delete data.password;
    res.status(201).send(data);
  } catch (err) {
    next(err);
  }
};
