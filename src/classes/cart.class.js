export default class Cart{
    constructor(data){
        this.timestamp = Date.now();
        this.products = data.products;
        this.products = [{
            id: product.id,
            quantity: product.quantity
        }];
    }
    newCart(){
        this.cart = [];
        return {
            id: this.cart.length + 1,
        }
    }
    deleteCart(){
        this.cart = [];
    }
    getCart(){
        return this.cart;
    }
    addProduct(product){
        this.cart.push(product);
    }
    deleteProduct(productId){
        this.cart = this.cart.filter(product => product.id !== productId);
    }
};