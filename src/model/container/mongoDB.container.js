// import * as model from './model/products.schema.js'
import { config } from '../../../config.js'

// let { productCollection, productsSchema } = model
export class MongoDBContainer {
  constructor(collection) {
    this.collection = collection
  }
  // MongoDB CRUD
  static async create(data) {
    return await this.collection.insertOne(data)
  }
  static async read(query) {
    return await MongoDBContainer.collection.find(query).toArray()
  }
  static async update(query, data) {
    return await this.collection.updateOne(query, data)
  }
  async delete(query) {
    return await this.collection.deleteOne(query)
  }

  // static create = async (element) => {
  //   await this.model.create(element)
  // }
  // static read = async () => {
  //   return await this.model.find()
  // }
  // static update = async (id, element) => {
  //   await this.model.findByIdAndUpdate(id, element)
  // }
  // static delete = async (id) => {
  //   await this.model.findByIdAndDelete(id)
  // }
  // static deleteAll = async () => {
  //   await this.model.deleteMany({})
  // }
}
