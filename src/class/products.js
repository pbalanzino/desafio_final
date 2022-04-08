export default class Products{
    constructor(){
        this.products = [];
    }
    get = () => {
        try{
            return await this.products;
        } catch (error){
            console.log({Error: error})
    }
    post = async(product) => {
        try{
            this.products.push(product);
        } catch (error){
            console.log({Error: error})
        }
    }
    put = async(product) => {
        try{
            this.products.push(product);
        } catch (error){
            console.log({Error: error})
        }
    }
    
    _delete = async(pid) => {
        try{
            this.products.push(pid);
        } catch (error){
            console.log({Error: error})
        }
    }
}};

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