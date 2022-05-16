import mongoose from 'mongoose'
import { config } from '../../../config.js'
import { DbClient } from './db.client.js'

export class MongoClient extends DbClient {
  constructor() {
    super()
    this.connected = false
    this.client = mongoose
  }
  async connect() {
    try {
      this.client.connect(config.db.cnxStr, {
        useUnifiedTopology: true,
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
      })
      console.log('Database connected!')
    } catch (error) {
      console.log(error)
    }
  }
  async disconnect() {
    try {
      await this.client.connection.close()
      console.log('Database disconnected!')
      this.connected = false
    } catch (error) {
      console.log(error)
    }
  }
}
