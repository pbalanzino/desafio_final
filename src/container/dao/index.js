import { config } from '../../../config.js'

let productsDAO
let cartDAO

switch (config.database.engine) {
  case 'memory':
    productsDAO = import('./products/memory.productsDAO.js')
    cartDAO = import('./products/memory.cartDAO.js')
    break
  case 'file':
    productsDAO = import('./products/file.productsDAO.js')
    cartDAO = import('./products/file.cartDAO.js')
    break
  case 'mongodb':
    productsDAO = import('./products/mongoDB.productsDAO.js')
    cartDAO = import('./products/mongoDB.cartDAO.js')
    break
  case 'firebase':
    productsDAO = import('./products/firebase.productsDAO.js')
    cartDAO = import('./products/firebase.cartDAO.js')

    break
  case 'sqlite3':
    productsDAO = import('./products/sqlite3.productsDAO.js')
    cartDAO = import('./products/sqlite3.cartDAO.js')
    break
  default:
    productsDAO = import('./productos/mongoDB.productsDAO.js')
    cartDAO = import('./productos/mongoDB.cartDAO.js')
}

export { productsDAO, cartDAO }
