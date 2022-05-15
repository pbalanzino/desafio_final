import mongoose from 'mongoose'
import { config } from '../../../config.js'
import { DbClient } from './db.client.js'

export class MongoClient extends DbClient {
  constructor() {
    super()
    this.connected = False
    this.client = mongoose
  }
  async connect() {
    try {
      await this.client.connected(config.db.cnxStr, config.db.name, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })
      console.log('Database connected!')
    } catch (error) {
      throw new CustomError(500, 'Database connection error', error)
    }
  }
  async disconnect() {
    try {
      await this.client.connection.close()
      console.log('Database disconnected!')
      this.connected = false
    } catch (error) {
      throw new CustomError(500, 'Database disconnection error', error)
    }
  }
}
