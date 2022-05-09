import { config } from '../../../config.js'

let daoProductos
let daoCarritos

switch (config.database.engine) {
  case 'mongodb':
    daoProductos = import('./products/mongoDB.products.js')
    break
  case 'firebase':
    daoProductos = import('./products/firebase.products.js')
    break
  case 'sqlite3':
    daoProductos = import('./products/sqlite3.products.js')
    break
  default:
    daoProductos = import('./productos/mongoDB.products.js')
}

export { daoProductos, daoCarritos }
