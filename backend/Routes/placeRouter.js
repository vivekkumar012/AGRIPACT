import express from 'express';
import { loginUser, logout, registerUser } from '../controllers/userController';

const placeRouter = express.Router();

placeRouter.post("/register", registerUser);
placeRouter.post("/login", loginUser);
placeRouter.get("/getProfile", );
placeRouter.get("/logout", logout);

export default placeRouter;  