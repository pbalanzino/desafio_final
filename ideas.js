import fs from 'fs';
// import product from './src/classes/product.js';
import Manager from './src/tools/manager.js';

// console.log(await Manager.save({ title: 'product2', description: 'product1', code: 'product1', thumbnail: 'product1', price: 'product1', stock: 'product1' }));

Manager.delete(2)


/* let Pablo = {
    name: 'Pablo',
    age: 33,
    profile: 'admin'
}

Pablo.profile == 'admin' ? console.log('Pablo is an admin') : console.log('Pablo is not an admin'); */

/* class Person{
    
    static getPerson(){
        return 'Pablo';
    }
    
    static getProfile(){
        return 'Ro';
    }
    constructor(data){
        this.name = data.name;
        this.age = data.age;
        this.profile = data.profile;
    }
    
    getProfile(){
        return this.profile;
    }
}

const person1 = new Person('Pablo', 33, 'admin');

console.log(Person.getPerson())
console.log(Person.getProfile())
console.log(person1.getProfile())
 */
/* const path = './src/model/products.json';

const read = async() => {
    try{
        let file = await fs.promises.readFile(path, 'utf-8');
        console.log(file);
    } catch (err){
        console.log({ error: err });
    }
};

items(); */