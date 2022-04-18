import __dirname from '../utils.js';
import Manager from '../tools/manager.js';
import Products from './products.controller.js';

export default class Carts{
    
    static pathCarts = `${__dirname}/model/carts.json`;
    static db = Manager.read(Carts.pathCarts);

    constructor(){
        this.id = async function* (){
            try{
                let carts = await Carts.db;
                let id = await carts.length;
                while(true){
                    yield id++;
                }
            } catch(err) {
                console.error(` { error: ${err} }`);
            }
        };
        this.timestamp = Date.now();
        this.products = [];
    }
    
    static createCart = async (req, res) => {
        try{
            let carts = await Carts.db;
            let id = await Carts.id;
            let cart = new Carts();
            cart.id = await id.next().value;
            carts.push(cart);
            await Manager.write(Carts.pathCarts, carts);
            res.status(200).json(cart);
        } catch(err) {
            console.error(` { error: ${err} }`);
        }
    }
    
    static delete = async (req, res) => {
        try{
            let cartsArray = await Carts.db;
            let cart = cartsArray.find(cart => cart.id === req.params.id);
            cartsArray.splice(cartsArray[cart], 1);
            await Manager.save(Carts.pathCarts, cartsArray);
            res.status(200).send({ "message": "Cart deleted" });
        } catch (err) {
            console.error(` { error: ${err} }`);
        }
    }

    static showAllProducts = async (req, res) => {
        try {
            let cartsArray = await Carts.db;
            let cart = cartsArray.find(cart => cart.id == req.params.cid);
            res.status(200).send(cart.products);
        } catch (err) {
            res.status(404).json({
                message: 'Cart not found'
            });
        }

    }

    static addProductOnCart = async (req, res) => {
        try {
            let cartsArray = await Carts.db;
            let product = await Products.productsArray;
            let cart = cartsArray.find(cart => cart.id == req.params.cid);
            product.find(product => product.id == req.body.id) ? res.send(cart.products.push(req.body)): res.status(404).json({ message: 'Product not found' });
            cart.products.push({
                id: req.body.id,
                quantity: req.body.quantity
            });
            await Manager.save(Carts.pathCarts, cartsArray);
            res.status(200).send(cart.products);
        } catch (err) {
            res.sendStatus(404).json({
                message: 'Cart not found'
            });
        }
    }

    static deleteProduct = async (req, res) => {
        let cart = Carts.db.find(cart => cart.id == req.params.cid);
        if(cart){
            let product = cart.products.find(product => product.id == req.params.pid);
            if(product){
                cart.products.splice(cart.products.indexOf(product), 1);
                await Manager.write(Carts.pathCarts, Carts.db);
                res.status(200).json(cart);
            }else{
                res.status(404).json({
                    message: 'Product not found'
                });
            }
        }else{
            res.status(404).json({
                message: 'Cart not found'
            });
        }
    }
}