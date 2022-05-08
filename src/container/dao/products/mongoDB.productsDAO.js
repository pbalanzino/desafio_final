import MongoDBContainer from '../../mongoDB.container.js'

class MongoDBDAO extends MongoDBContainer {
  constructor() {
    super('')
  }
  async disconnect() {
    await this.close()
  }
}

export default MongoDBDAO
