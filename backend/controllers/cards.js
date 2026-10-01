import card from "../models/card.js";

// Obtener todas las tarjetas
export const getCards = (req, res) => {
  card
    .find({})
    .then((cards) => res.send(cards))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Crear una tarjeta
export const createCards = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  card
    .create({ name, link, owner })
    .then((newCard) => {
      res.status(201).send(newCard);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        return res.status(400).send({
          message: "Datos inválidos. Falta name o link",
        });
      }

      res.status(500).send({
        message: "Server error",
        error: error.message,
      });
    });
};

// Eliminar una tarjeta
export const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;

    const foundCard = await card.findById(cardId);

    if (!foundCard) {
      return res.status(404).send({
        message: "Tarjeta no encontrada",
      });
    }

    if (foundCard.owner.toString() !== req.user._id.toString()) {
      return res.status(403).send({
        message: "No tienes permiso para eliminar esta tarjeta",
      });
    }

    const deletedCard = await card.findByIdAndDelete(cardId);

    return res.send(deletedCard);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).send({
        message: "ID de tarjeta inválido",
      });
    }

    return res.status(500).send({
      message: err.message,
    });
  }
};

// Dar like
export const likeCard = (req, res) => {
  const { cardId } = req.params;
  console.log(cardId);
  card
    .findByIdAndUpdate(
      cardId,
      {
        $addToSet: {
          likes: req.user._id,
        },
      },
      {
        new: true,
      },
    )
    .then((updatedCard) => {
      if (!updatedCard) {
        return res.status(404).send({
          message: "Tarjeta no encontrada",
        });
      }

      res.send(updatedCard);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({
          message: "ID de tarjeta inválido",
        });
      }

      res.status(500).send({
        message: err.message,
      });
    });
};

// Quitar like
export const dislikeCard = (req, res) => {
  const { cardId } = req.params;

  card
    .findByIdAndUpdate(
      cardId,
      {
        $pull: {
          likes: req.user._id,
        },
      },
      {
        new: true,
      },
    )
    .then((updatedCard) => {
      if (!updatedCard) {
        return res.status(404).send({
          message: "Tarjeta no encontrada",
        });
      }

      res.send(updatedCard);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({
          message: "ID de tarjeta inválido",
        });
      }

      res.status(500).send({
        message: err.message,
      });
    });
};
