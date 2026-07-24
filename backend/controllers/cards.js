import card from "../models/card.js";

export const getCards = (req, res) => {
  fs.readFile("./data/cards.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Cannot read users file" });
    }

    res.json(JSON.parse(data));
  });
};

export const createCards = (req, res) => {
  console.log(req.user._id);
  const { name, link } = req.body;
  const owner = req.user._id;
  card
    .create({ name, link, owner })
    .then((card) => {
      res.status(201).send(card);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        return res.status(400).send({ message: "Datos inválidos. Falta name" });
      }
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Datos invalidos. Falta link" });
      }
      res.status(500).send({ message: "server error", error: error });
    });
};

/*
.catch((err) => {
  console.log(err); // 

  if (err.name === "ValidationError") {
    return res.status(400).send({ message: "Datos inválidos" });
  }

  return res.status(500).send({ message: "Error del servidor" });
});*/
