// import idGenerator from '../tools/idGenerator.js';
import generator from '../tools/generator.js';
import Manager from '../tools/manager.js';


export default class Product {

    static path = '../model/product.json';

    constructor(id, title, description, code, thumbnail, price, stock){
        this.id = id;
        this.timestamp = Date.now();
        this.title = title;
        this.description = description;
        this.code = code;
        this.thumbnail = thumbnail;
        this.price = price;
        this.stock = stock;
    }

    static async get(){
        try{
            Manager.read();
        }catch (err){
            console.log(`{ error: ${err} }`);
        }
    }
};