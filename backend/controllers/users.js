import User from "../models/users.js";

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

export const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })

    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(500).send({ message: "server error", error: error });
    });
};
