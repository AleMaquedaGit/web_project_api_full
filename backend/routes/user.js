import express from "express";

import auth from "../../backend/middlewares/auth.js";

import {
  getUsers,
  getUsersId,
  deleteUsers,
  getCurrentUser,
  updateUser,
} from "../controllers/users.js";

const usersRoute = express.Router();

usersRoute.get("/", auth, getUsers);

usersRoute.get("/me", auth, getCurrentUser);

usersRoute.get("/:id", auth, getUsersId);

usersRoute.delete("/:id", auth, deleteUsers);

usersRoute.patch("/me", auth, updateUser);

export default usersRoute;
