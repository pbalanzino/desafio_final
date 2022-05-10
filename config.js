export const config = {
  client: [
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

const sqlite3 = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'model/products.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    }
  }
}
