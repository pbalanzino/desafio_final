// import idGenerator from '../tools/idGenerator.js';
import generator from '../tools/generator.js';
import Manager from '../tools/manager.js';

export default class Product {

    static path = './src/model/products.json';

    constructor(title, description, code, thumbnail, price, stock){
        // falta terminar idGenerator
        this.id = generator().next().value;
        this.timestamp = Date.now();
        this.title = title;
        this.description = description;
        this.code = code;
        this.thumbnail = thumbnail;
        this.price = price;
        this.stock = stock;
    }

    static async getAll(){
        try{
            Manager.show(Product.path);
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }
    static async get(id){
        try{
            Manager.showOnly(id);
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    static async save(product){
        try{
            Manager.save(product);
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    static async update(id){
        try{
            Manager.update(id);
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }
    
    static async delete(id){
        try{
            Manager.delete(id);
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

};

