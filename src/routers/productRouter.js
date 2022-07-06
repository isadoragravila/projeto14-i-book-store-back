import { getProducts, getSingleProuct } from "../controllers/productController.js";
import { Router } from 'express';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:idProduct', getSingleProuct);

export default router;