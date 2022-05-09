import FileContainer from '../../file.container.js'

export class FileDAO extends FileContainer {
  constructor() {
    super('model/products.json')
  }
  async disconnect() {
    await this.close()
  }
}
