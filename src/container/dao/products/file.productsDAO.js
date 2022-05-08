import FileContainer from '../../file.container.js'

class FileDAO extends FileContainer {
  constructor() {
    super('model/products.json')
  }
  async disconnect() {
    await this.close()
  }
}

export default FileDAO
