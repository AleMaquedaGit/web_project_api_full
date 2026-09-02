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
  updateUser,
} from "../controllers/users.js";

const usersRoute = express.Router();

usersRoute.post("/signin", login);
usersRoute.post("/", createUser);
usersRoute.get("/", auth, getUsers);
usersRoute.get("/me", auth, getCurrentUser);

usersRoute.get("/:id", auth, getUsersId);

usersRoute.delete("/:id", auth, deleteUsers);
usersRoute.patch("/me", auth, updateUser);

export default usersRoute;
