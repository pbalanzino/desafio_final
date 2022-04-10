import idGenerator from '../tools/idGenerator.js';

export default class Products{
    constructor(id, timestamp, title, description, code, thumbnail, price, stock){
        this.products = [];
        this.id = idGenerator();
        this.timestamp = Date.now();
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