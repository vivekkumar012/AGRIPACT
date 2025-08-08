import express from 'express';
import { createPlace, getAllPlaces, getPlaceById, getUserPlaces, updatePlace } from '../controllers/placeController.js';


const placeRouter = express.Router();

placeRouter.post("/create", createPlace);
placeRouter.get("/user-places", getUserPlaces);
placeRouter.get("/places/:id", getPlaceById);
placeRouter.put("/update-places", updatePlace);
placeRouter.get("/places", getAllPlaces);

export default placeRouter;  