import * as model from './model/products.schema.js'
import config from '../../../config.js'

let { productCollection, productsSchema } = model
export class MongoDBContainer {
  constructor(collection) {
    this.collection = collection
  }
  // MongoDB CRUD
  async create(data) {
    return await this.collection.products.insertOne(data)
  }
  async read(query) {
    return await this.collection.products.find(query).toArray()
  }
  async update(query, data) {
    return await this.collection.products.updateOne(query, data)
  }
  async delete(query) {
    return await this.collection.products.deleteOne(query)
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
