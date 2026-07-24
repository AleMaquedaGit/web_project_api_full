import express from "express";
import fs from "fs";
import path from "path";
import User from "../models/users.js";
import {
  getUsers,
  getUsersId,
  createUser,
  deleteUsers,
} from "../controllers/users.js";

const usersRoute = express.Router();

usersRoute.get("/", getUsers);
usersRoute.get("/:id", getUsersId);
usersRoute.post("/", createUser);
usersRoute.delete("/:id", deleteUsers);

export default usersRoute;
