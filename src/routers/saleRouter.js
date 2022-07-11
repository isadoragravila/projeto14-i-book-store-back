import { insertSale, cleanCart, changeInventory } from "../controllers/saleController.js";
import { Router } from 'express';
import userValidation from "../middlewares/userValidation.js";
import saleValidation from "../middlewares/saleValidation.js";
import inventoryValidation from "../middlewares/inventoryValidation.js";

const router = Router();

router.post('/sales', userValidation, saleValidation, insertSale);
router.delete('/sales', userValidation, cleanCart);
router.put('/inventory', inventoryValidation, changeInventory);

export default router;
