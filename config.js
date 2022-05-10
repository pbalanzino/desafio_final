export const config = {
  database: [
    {
      engine: 'file',
      uri: 'model/products.json'
    },
    {
      engine: 'mongoDB',
      uri: 'mongodb://localhost:27017/ecommerce',
      name: 'ecommerce'
    },
    {
      engine: 'firebase',
      uri: 'https://ecommerce-fb.firebaseio.com/'
    },
    {
      engine: 'sqlite3',
      uri: 'model/products.sqlite'
    }
  ]
}
