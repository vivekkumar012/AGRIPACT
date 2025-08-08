import express from 'express';
import { loginUser, logout, registerUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getProfile", );
userRouter.get("/logout", logout);

export default userRouter;  