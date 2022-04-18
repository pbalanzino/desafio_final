import express from 'express';
import Products from '../controller/products.controller.js';
import verifyAuth from '../auth/auth.js';

const router = express.Router();
//use middleware to verify token
router.use(verifyAuth);
router.use(express.json());
router.get('/:pid?', Products.show);
router.post('/', verifyAuth, Products.add);
router.put('/:pid', verifyAuth, Products.update);
router.delete('/:pid', verifyAuth, Products.delete);

export default router;