import { insertProduct, getCart, deleteProductFromCart, deleteProduct } from "../controllers/cartController.js";
import { Router } from 'express';
import cartValidation from '../middlewares/cartValidation.js'
import userValidation from "../middlewares/userValidation.js";

const router = Router();

router.put('/cart/add-one', userValidation, cartValidation, insertProduct);
router.get('/cart', userValidation, getCart);
router.put('/cart/delete-all', userValidation, cartValidation, deleteProductFromCart);
router.put('/cart/delete-one', userValidation, cartValidation, deleteProduct);

export default router;