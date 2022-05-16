import __dirname from '../utils.js'
import { Manager } from '../tools/manager.js'
import { MongoDBDAO } from '../model/container/dao/products/mongoDB.productsDAO.js'

// const { read, save } = Manager
const { read, save, update } = MongoDBDAO

export class Products {
  static pathProducts = `${__dirname}/model/products.json`

  constructor(id, title, description, code, thumbnail, price, stock) {
    this.id = id
    this.timestamp = Date.now()
    this.title = title
    this.description = description
    this.code = code
    this.thumbnail = thumbnail
    this.price = price
    this.stock = stock
  }

  static show = async (req, res, next) => {
    try {
      // let productsArray = await read(Products.pathProducts)
      let productsArray = await read({})
      if (Number(req.query.pid) >= productsArray.length)
        res.send(`Product with this id: ${req.query.pid} does not exist.`)
      Number(req.query.pid)
        ? res.status(200).json(productsArray[req.query.pid])
        : res.send(productsArray)
    } catch (error) {
      return next(error)
    }
  }

  static add = async (req, res, next) => {
    try {
      // let products = await read(Products.pathProducts)
      let products = await read({})
      let newProduct = new Products(
        req.body.title,
        req.body.description,
        req.body.code,
        req.body.thumbnail,
        req.body.price,
        req.body.stock
      )
      products.push(newProduct)
      // save(Products.pathProducts, products)
      await create(newProduct)
      res.send(newProduct)
    } catch (error) {
      error.status = 500
      next(error)
    }
  }

  static update = async (req, res, next) => {
    try {
      // let products = await read(Products.pathProducts)
      let products = await read({})
      let productId = products.find((product) => product.id == req.params.pid)
      productId.title = req.body.title
      productId.description = req.body.description
      productId.code = req.body.code
      productId.thumbnail = req.body.thumbnail
      productId.price = req.body.price
      productId.stock = req.body.stock
      // save(Products.pathProducts, products)
      await update({ id: req.params.pid }, productId)
      res.send(products)
    } catch (error) {
      next(error)
    }
  }

  static clean = async (req, res, next) => {
    try {
      const productID = Number(req.params.pid)
      // let productsArray = await read(Products.pathProducts)
      let productsArray = await read({})
      let products = productsArray
      if (~productID) {
        productsArray.splice(req.params.pid, 1)
        await MongoDBDAO.delete({ id: req.params.pid })
        // save(Products.pathProducts, products)
        res.send(products)
      } else {
        throw new Error('Product not found')
        error.status = 404
      }
    } catch (error) {
      return next(error)
    }
  }
}
