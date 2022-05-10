import { Manager } from '../../tools/manager.js'
import data from '../products.json' assert { type: 'json' }
const { read, save } = Manager
let id = data.length

export class FileContainer {
  constructor(title, description, code, thumbnail, price, stock) {
    this.id = id
    this.timestamp = Date.now()
    this.title = title
    this.description = description
    this.code = code
    this.thumbnail = thumbnail
    this.price = price
    this.stock = stock
  }

  async create(title, description, code, thumbnail, price, stock) {
    try {
      let newProduct = new FileContainer(
        title,
        description,
        code,
        thumbnail,
        price,
        stock
      )
      data.push({
        id: id++,
        timestamp: newProduct.timestamp,
        title: newProduct.title,
        description: newProduct.description,
        code: newProduct.code,
        thumbnail: newProduct.thumbnail,
        price: newProduct.price,
        stock: newProduct.stock
      })

      // await save(this.path, JSON.stringify(data), null, '\t')
    } catch (error) {
      console.log(error)
    }
  }

  async read(id) {
    try {
      if (id) {
        console.log(data[id])
        return data[id]
      }
      console.log(data)
      return data
      // return JSON.parse(data)
    } catch (error) {
      console.log(`{ error: ${error} }`)
    }
  }

  async update(id, title, description, code, thumbnail, price, stock) {
    try {
      data[id].title = title
      data[id].description = description
      data[id].code = code
      data[id].thumbnail = thumbnail
      data[id].price = price
      data[id].stock = stock
      console.log(`Product with id: ${id} has been updated.`)
      return data[id]
      // let data = JSON.parse(file)
      // await save(this.path, JSON.stringify(data))
    } catch (error) {
      console.log(`{ error: ${error} }`)
    }
  }

  async delete(id) {
    try {
      data.splice(id, 1)
      console.log(`Product with id: ${id} has been deleted.`)
      return data
      // await _delete(this.path)
      // return JSON.parse(this.path)
    } catch (error) {
      console.log(`{ error: ${error} }`)
    }
  }
}

/* let test = new FileContainer()
test.create('title1', '1', 'code111', 'thumbnail', 111, 1000)
test.create('title2', '2', 'code111', 'thumbnail', 111, 1000)
test.create('title3', '3', 'code111', 'thumbnail', 111, 1000)
test.read()
test.read(2)
test.update(2, 'title20', '20', 'code111', 'thumbnail', 111, 1000)
test.read()
test.delete(3)
test.read() */
