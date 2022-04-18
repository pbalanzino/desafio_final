import express from 'express';
import Carts from '../controller/carts.controller.js';

const router = express.Router();

router.post('/', Carts.createCart);
router.delete('/:cid', Carts.delete);
router.get('/:cid/products', Carts.showAllProducts);
router.post('/:cid/products', Carts.addProductOnCart);
router.delete('/:cid/products/:pid', Carts.deleteProduct);

export default router;