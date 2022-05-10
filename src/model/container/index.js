import { config } from '../../../config.js'

let container

switch (config.database.engine) {
  case 'memory':
    container = import('./memory.container.js')
    break
  case 'file':
    container = import('./file.container.js')
    break
  case 'mongodb':
    container = import('./mongoDB.container.js')
    break
  case 'firebase':
    container = import('./firebase.container.js')
    break
  case 'sqlite3':
    container = import('./sqlite3.container.js')
    break
  default:
    container = import('./mongoDB.container.js')
}

export { container }

console.log(config.database.engine)
