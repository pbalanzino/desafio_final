import express from 'express';

const router = express.Router();


let carts = [];

router.post('/', (req, res) => {
    let carts = req.body;
    carts.push(cart)
    res.send(cart);
});
router.delete('/:cid', (req, res) => {
    res.send('');
});
router.get('/:cid/products', (req, res) => {
    req.params('');
    res.send('cid/products');
});
router.post('/:cid/products', (req, res) => {
    res.send('');
});
router.delete('/:cid/products/:pid', (req, res) => {
    res.send('');
});

export default router;