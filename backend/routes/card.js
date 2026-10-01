import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import {
  createCards,
  getCards,
  deleteCard,
  likeCard,
  dislikeCard,
} from "../controllers/cards.js";

const router = Router();

router.get("/", getCards);
router.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().min(2).max(18).required(),
      link: Joi.string().uri().required(),
    }),
  }),
  createCards,
);

router.delete("/:cardId", deleteCard);

router.put("/:cardId/likes", likeCard);
router.delete("/:cardId/likes", dislikeCard);

export default router;
