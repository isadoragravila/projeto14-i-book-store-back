import { getProducts, getSingleProduct } from "../controllers/productController.js";
import { Router } from 'express';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:idProduct', getSingleProduct);

export default router;