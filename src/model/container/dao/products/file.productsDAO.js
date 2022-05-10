import FileContainer from '../../file.container.js'

export class FileDAO extends FileContainer {
  constructor(path) {
    super('model/products.json')
  }
}
