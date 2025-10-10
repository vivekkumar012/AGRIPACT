import express from "express"
import { allProducts, createProduct, deleteProduct, editProduct } from "../controllers/productController.js";
import isAuthenticate from "../Middlewares/auth.js";

const productRouter = express.Router();

productRouter.post("/create-product", isAuthenticate, createProduct);
productRouter.post("/edit/:id", isAuthenticate, editProduct);
productRouter.post("/delete/:id", isAuthenticate, deleteProduct);
productRouter.post("/all", isAuthenticate, allProducts);

export default productRouter;