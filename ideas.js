import fs from 'fs';

/* let Pablo = {
    name: 'Pablo',
    age: 33,
    profile: 'admin'
}

Pablo.profile == 'admin' ? console.log('Pablo is an admin') : console.log('Pablo is not an admin'); */


const path = './src/model/products.json';

const read = async() => {
    try{
        let file = await fs.promises.readFile(path, 'utf-8');
        console.log(file);
    } catch (err){
        console.log({ error: err });
    }
};


items();