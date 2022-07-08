import { insertProduct, insertSale, cleanCart, getCart } from "../controllers/cartController.js";
import { Router } from 'express';
import cartValidation from '../middlewares/cartValidation.js'
import userValidation from "../middlewares/userValidation.js";
import saleValidation from "../middlewares/saleValidation.js";

const router = Router();

router.put('/cart', userValidation, cartValidation, insertProduct);
router.get('/cart', userValidation, getCart);
router.post('/sales', userValidation, saleValidation, insertSale);
router.delete('/sales', userValidation, cleanCart);


export default router;