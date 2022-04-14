import fs from 'fs';
import Product from '../classes/product.class.js';
import Cart from '../classes/cart.class.js';

export default class Manager{
    
    static pathCart = './src/model/carts.json';
    
    static async read(path){
        try {
            let file = await fs.promises.readFile(path, 'utf-8');
            return JSON.parse(file);
    } catch (err) {
            console.log(`{ error: ${err} }`);
        }
    }

    static async save(path, element){
        try{
            await fs.promises.writeFile(path, JSON.stringify(element), null, '\t');
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    static async deleteAll(path){
        try{
            await fs.promises.unlink(path);
        } catch (err) {
            console.log(`{ error: ${err} }`);
        }
    }
};