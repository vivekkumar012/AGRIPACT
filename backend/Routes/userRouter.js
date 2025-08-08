import express from 'express';
import { getProfile, loginUser, logout, registerUser } from '../controllers/userController.js';
import isAuthenticate from '../Middlewares/auth.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getProfile", isAuthenticate, getProfile);
userRouter.get("/logout", logout);

export default userRouter;  