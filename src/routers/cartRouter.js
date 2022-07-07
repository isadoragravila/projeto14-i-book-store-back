import { insertProduct } from "../controllers/cartController.js";
import { Router } from 'express';
import cartValidation from '../middlewares/cartValidation.js'
import userValidation from "../middlewares/userValidation.js";

const router = Router();

router.put('/cart', userValidation, cartValidation, insertProduct);


export default router;