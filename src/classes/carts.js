export default class Carts{
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