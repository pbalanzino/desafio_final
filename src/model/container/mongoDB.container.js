import mongoose from 'mongoose'
import * as model from './model/products.schema.js.js'
import config from '../../../config.js'
const database = cliente.db(config.database.name)

export class MongoDBContainer {
  constructor(collection) {
    this.collection = database.collection(collection)
  }
  static create = async (element) => {
    await this.model.create(element)
  }
  static read = async () => {
    return await this.model.find()
  }
  static update = async (id, element) => {
    await this.model.findByIdAndUpdate(id, element)
  }
  static delete = async (id) => {
    await this.model.findByIdAndDelete(id)
  }
  static deleteAll = async () => {
    await this.model.deleteMany({})
  }
}

export default MongoDBContainer
