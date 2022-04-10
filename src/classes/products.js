import idGenerator from '../tools/idGenerator.js';

export default class Product {
    constructor(id, timestamp, title, description, code, thumbnail, price, stock){
        this.id = idGenerator().next().value;
        this.timestamp = Date.now();
        this.title = title;
        this.description = description;
        this.code = code;
        this.thumbnail = thumbnail;
        this.price = price;
        this.stock = stock;
    }
};

/* 

export default class Products{
    constructor(){
        this.products = [];
    }
    get = () => {
        return this.products;
    }
    post = (product) => {
        this.products.push(product);
    }
    put = (product) => { 
        this.products.push(product);
    }
    _delete = (pid) => {
        this.products.push(pid);
    }
};

*/