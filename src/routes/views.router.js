import { Router } from "express";
import { ProductManager } from "../DAL/DAOs/productDaos/productsManager.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";
import {
  getHome,
  getRegister,
  getProductsControllers,
  getProductByIdControllers,
  addProductToCartControllers
} from "../controllers/views.controllers.js";
import { ROL_USER } from "../DAL/MongoDB/models/users.model.js";

const router = Router();


router.get("/", getHome);

router.get("/register", getRegister);

router.get("/products", ensureAuthenticated (ROL_USER),getProductsControllers);

router.get("/products/:id", getProductByIdControllers)

router.post("/cart/product/:pid", ensureAuthenticated (ROL_USER),addProductToCartControllers )

export default router;
