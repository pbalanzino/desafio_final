import express from 'express';
const router = express.Router();

let products = [{id: 0, title: "product1"}, {id: 1, title:"product2"}, {id:2,title:"product3"}];
let admin = true;

router.get('/:pid?', (req, res) => {
    let pid = req.params.pid;
    pid
    ? res.send(products[pid]) 
    : res.send(products.map(product => product.title));
});
router.post('/', (req, res) => {
    let product = req.body;
    admin == true 
    ? products.push(product)
    : res.send({ error: -1, message: `ruta ${pid} metodo ${pid} no autorizada` });
});
router.put('/:pid', (req, res) => {
    let pid = req.params.pid;
    admin == true 
    ? products.splice(pid, 1, req.body)
    : res.send({ error: -1, message: `ruta ${pid} metodo ${pid} no autorizada` });
});
router.delete('/:pid', (req, res) => {
    let pid = req.params.pid;
    admin == true 
    ? products.pop(pid)
    : res.send({ error: -1, message: `ruta ${pid} metodo ${pid} no autorizada` });
});

export default router;