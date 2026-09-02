import express from "express";
import fs from "fs";
import path from "path";
import User from "../models/users.js";
import auth from "../../backend/middlewares/auth.js";
import {
  getUsers,
  getUsersId,
  createUser,
  deleteUsers,
  login,
  getCurrentUser,
} from "../controllers/users.js";

const usersRoute = express.Router();

usersRoute.post("/signin", login);
usersRoute.post("/", createUser);
usersRoute.get("/", getUsers);
usersRoute.get("/me", getCurrentUser);
usersRoute.patch("/me", auth, updateUser);

usersRoute.get("/:id", getUsersId);

usersRoute.delete("/:id", deleteUsers);

export default usersRoute;
