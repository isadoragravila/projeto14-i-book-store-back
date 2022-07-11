import { insertProduct, insertSale, cleanCart, getCart, changeInventory, deleteProductFromCart } from "../controllers/cartController.js";
import { Router } from 'express';
import cartValidation from '../middlewares/cartValidation.js'
import userValidation from "../middlewares/userValidation.js";
import saleValidation from "../middlewares/saleValidation.js";
import inventoryValidation from "../middlewares/inventoryValidation.js";

const router = Router();

router.put('/cart', userValidation, cartValidation, insertProduct);
router.get('/cart', userValidation, getCart);
router.put('/cart/delete', userValidation, cartValidation, deleteProductFromCart);


router.post('/sales', userValidation, saleValidation, insertSale);
router.delete('/sales', userValidation, cleanCart);
router.put('/inventory', inventoryValidation, changeInventory);


export default router;