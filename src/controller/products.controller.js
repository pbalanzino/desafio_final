import generator from '../tools/generator.js';
import Manager from '../tools/manager.js';

export default class Products {
    
    static pathProducts = `../model/products.json`;
    static productsArray = Manager.read(Products.pathProducts);
    
    constructor(title, description, code, thumbnail, price, stock){
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
            return await Products.productsArray;
        }catch (err){
            console.error(` { error: ${err} }`);
        }
    }
    
    static async showOnly(id){
        try {
            let productsArray = Products.productsArray;
            if (id <= productsArray.length) {
                productsArray.filter(product => {
                    if(product.id !== id) product;
                    console.log(product);
                    return product
                })
            } 
        } catch (err) {
            console.error(` { error: ${err} }`);
        }
    }

    static async add(product){
        try{
            let productsArray = await Products.productsArray;
            const newProductsArray = productsArray.push(product)
            console.log(newProductsArray);
            return newProductsArray;
        } catch (err) {
            console.error(` { error: ${err} }`);
        }
    }

    static async save(product){
        try{
            Manager.save(Manager.pathProduct, product);
        }catch (err){
            console.error(` { error: ${err} } `)
        }
    }

    static async update(id, product){
        try{
            let productsArray = await Manager.read(Manager.pathProduct);
            let productId = productsArray[id];
            let updatedProduct = (product.title, product.description, product.code, product.thumbnail, product.price, product.stock);
            productId.push(updatedProduct);
            await Manager.save(productId, Manager.pathProduct);
        }catch (err){
            console.log(` { error: ${err} } `);
        }
    }
    
    static async delete(id){
        try{
            Manager.delete(id);
        }catch (err){
            console.error(` { error: ${err} } `);
        }
    }
};

Products.getAll()