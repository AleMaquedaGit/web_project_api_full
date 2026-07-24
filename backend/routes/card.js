import express, { Router } from "express";
import fs from "fs";
import path from "path";
import { createDeflate } from "zlib";
import card from "../models/card.js";
import { createCards, getCards } from "../controllers/cards.js";

const router = Router();

router.get("/", getCards);
router.post("/", createCards);

export default router;
