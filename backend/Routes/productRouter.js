import express from "express"
import { allProducts, createProduct, deleteProduct, editProduct } from "../controllers/productController.js";
import isAuthenticate from "../Middlewares/auth.js";

const productRouter = express.Router();

productRouter.post("/create-product", isAuthenticate, createProduct);
productRouter.post("/edit/:id", isAuthenticate, editProduct);
productRouter.delete("/delete/:id", isAuthenticate, deleteProduct);
productRouter.get("/all", isAuthenticate, allProducts);

export default productRouter;