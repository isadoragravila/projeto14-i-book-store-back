import { insertProduct } from "../controllers/cartController.js";
import { Router } from 'express';
import cartValidation from '../middlewares/cartValidation.js'

const router = Router();

router.put('/cart', cartValidation, insertProduct);


export default router;