import express from "express";
import { allOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/allorders", allOrders);

export default orderRouter;