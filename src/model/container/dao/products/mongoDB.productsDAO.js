import { MongoDBContainer } from '../../mongoDB.container.js'
import { config } from '../../../../../config.js'
export class MongoDBDAO extends MongoDBContainer {
  constructor() {
    super(config.db.collection)
  }
  async disconnect() {
    await this.close()
  }
}
