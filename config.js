export const config = {
  db: {
    name: 'ecommerce',
    collection: 'products',
    cnxStr: 'mongodb://127.0.0.1:27017/',
    //projection : { _id: 0,__v:0 },
    projection: { __v: 0 }
  }
}
