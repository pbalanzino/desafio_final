import fs from 'fs';

const p = './src/model/products.json';

export default class Manager{
    constructor(path){
        this.path = path;
    }

    async read(){
        try {
            // if(!fs.existsSync(this.path)) await fs.promises.writeFile(this.path, '[]');
            let file = await fs.promises.readFile(this.path, 'utf-8');
            return file;
        } catch (err){
            console.log(`{ error: ${err} }`);
        }
    }

    async save(product){
        try{
            let file = await fs.promises.readFile(this.path, 'utf-8',);
            let fileParsed = JSON.parse(file);
            const content = {
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                id: fileParsed.length + 1
               }
            fileParsed.push(content);
            await fs.promises.writeFile(this.path, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`No se pudo guardar el archivo: ${err}`);
        }
    }

    async delete(){
        try{
            await fs.promises.unlink(this.path);
        } catch (err) {
            console.log(`No se pudo borrar el archivo. ${err}`);
        }
    }
};

const manager = new Manager(p);
manager.read(p);