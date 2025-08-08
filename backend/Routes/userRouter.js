import express from 'express';
import { getProfile, loginUser, logout, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getProfile", getProfile);
userRouter.get("/logout", logout);

export default userRouter;  