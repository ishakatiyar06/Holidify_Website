import express from "express";
import { login, signUp } from "./userController.js";
export * from "./userController.js";

const userRouter = express.Router();

userRouter.post("/signup", signUp);

userRouter.post("/login", login);

export default userRouter;
