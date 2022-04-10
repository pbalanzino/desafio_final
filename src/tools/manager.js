import fs from 'fs';
import idGenerator from './idGenerator.js';
import Product from './src/classes/product.js';
const p = './src/model/products.json';

export default class Manager{
    constructor(path){
        this.path = path;
    }

    async read(){
        try {
            // if(!fs.existsSync(this.path)) await fs.promises.writeFile(this.path, '[]');
            let file = await fs.promises.readFile(this.path, 'utf-8');
            return file;
        } catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    async save(product){
        try{
            let file = await fs.promises.readFile(this.path, 'utf-8',);
            let fileParsed = JSON.parse(file);
            const newProduct = new Product(product.title, product.description, product.code, product.thumbnail, product.price, product.stock);
            // const newProduct = {
            //     id: idGenerator.next().value,
            //     timestamp: Date.now(),
            //     title: product.title,
            //     price: product.price,
            //     thumbnail: product.thumbnail
            //    }
            fileParsed.push(newProduct);
            await fs.promises.writeFile(this.path, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    async update(id){
        try{
            let file = await fs.promises.readFile(this.path, 'utf-8',);
            let fileParsed = JSON.parse(file);
            const product = fileParsed[id];
            const updatedProduct = (product.title, product.description, product.code, product.thumbnail, product.price, product.stock);
            fileParsed.push(updatedProduct);
            await fs.promises.writeFile(this.path, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    async delete(){
        try{
            await fs.promises.unlink(this.path);
        } catch (err) {
            console.log(`{ error: ${err} }`);
        }
    }
};