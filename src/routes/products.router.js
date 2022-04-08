import express from 'express';

const router = express.Router();

let products = [];

router.get('/:pid?', (req, res) => {
    res.send('hi');    
});
router.post('/', (req, res) => {
    let product = req.body;
    products.push(product);
    res.send({ status: "success", message: "Product added" });
});
router.put('/:pid', (req, res) => {
    res.send('');
});
router.delete('/:pid', (req, res) => {
    res.send('');
});

export default router;