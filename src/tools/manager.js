import fs from 'fs';
import Product from '../classes/product.class.js';
import Cart from '../classes/cart.class.js';

export default class Manager{
    
    static pathProduct = `../model/products.json`;
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
  /*   static async save(product, path){
        try{
            let file = await fs.promises.readFile(path, 'utf-8',);
            let fileParsed = JSON.parse(file);
            const newProduct = new Product(product.id = fileParsed.length + 1, product.title, product.description, product.code, product.thumbnail, product.price, product.stock);
            fileParsed.push(newProduct);
            await fs.promises.writeFile(path, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    } */

    static async deleteAll(path){
        try{
            await fs.promises.unlink(path);
        } catch (err) {
            console.log(`{ error: ${err} }`);
        }
    }
};

/* 

// if(!fs.existsSync(this.path)) await fs.promises.writeFile(this.path, '[]');

// const newProduct = {
    //     id: idGenerator.next().value,
    //     timestamp: Date.now(),
    //     title: product.title,
    //     price: product.price,
    //     thumbnail: product.thumbnail
//    }

// let newContent = fileParsed.forEach(product => {
            //     if(product.id == id) {
            //         fileParsed.splice(product[id], 1);
            //     }
            // });

*/