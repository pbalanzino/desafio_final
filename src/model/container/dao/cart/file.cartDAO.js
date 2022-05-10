import FileContainer from '../../file.container.js'

export class FileDAO extends FileContainer {
  constructor() {
    super('model/carts.json')
  }
  async disconnect() {
    await this.close()
  }
}
