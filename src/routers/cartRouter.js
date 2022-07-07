import { insertProduct, insertSale } from "../controllers/cartController.js";
import { Router } from 'express';
import cartValidation from '../middlewares/cartValidation.js'
import userValidation from "../middlewares/userValidation.js";
import saleValidation from "../middlewares/saleValidation.js";

const router = Router();

router.put('/cart', userValidation, cartValidation, insertProduct);
router.post('/sales', userValidation, saleValidation, insertSale);


export default router;