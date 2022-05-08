export const config = [
  {
    port: 8080,
    database: {
      engine: 'file',
      path: 'model/products.json'
    }
  },
  {
    database: {
      engine: 'mongoDB',
      url: 'mongodb://localhost:27017/ecommerce',
      name: 'ecommerce'
    }
  },
  {
    database: {
      engine: 'firebase',
      url: 'https://ecommerce-fb.firebaseio.com/'
    }
  },
  {
    database: {
      engine: 'sqlite3',
      path: 'model/products.sqlite'
    }
  }
]
