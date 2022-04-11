import fs from 'fs';
import Product from '../classes/product.class.js';
import Cart from '../classes/cart.class.js';
// const p = './src/model/model.json';
// const p = '../model/model.json';
export default class Manager{
    
    static pathProduct = './src/model/model.json';
    static pathCart = './src/model/cart.json';
    
    static async read(){
        try {
            let file = await fs.promises.readFile(this.path, 'utf-8');
            return file;
        } catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    static async save(product){
        try{
            let file = await fs.promises.readFile(this.path, 'utf-8',);
            let fileParsed = JSON.parse(file);
            const newProduct = new Product(product.id = fileParsed.length + 1, product.title, product.description, product.code, product.thumbnail, product.price, product.stock);
            fileParsed.push(newProduct);
            await fs.promises.writeFile(this.path, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    static async update(id){
        try{
            let file = await fs.promises.readFile(this.path, 'utf-8',);
            let fileParsed = JSON.parse(file);
            let product = fileParsed[id];
            let updatedProduct = (product.title, product.description, product.code, product.thumbnail, product.price, product.stock);
            fileParsed.push(updatedProduct);
            await fs.promises.writeFile(this.path, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    static async delete(id){
        try{
            let file = await fs.promises.readFile(this.path, 'utf-8',);
            let fileParsed = JSON.parse(file);
            fileParsed = fileParsed.filter(product => product.id !== id);
            console.log(fileParsed);
            await fs.promises.writeFile(this.path, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    static async deleteAll(){
        try{
            await fs.promises.unlink(this.path);
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