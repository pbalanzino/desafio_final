import __dirname from '../utils.js'
import Manager from '../tools/manager.js'
export default class Products {
  static pathProducts = `${__dirname}/model/products.json`
  static productsArray = Manager.read(Products.pathProducts)

  constructor(title, description, code, thumbnail, price, stock) {
    this.id = productsArray.length + 1
    this.timestamp = Date.now()
    this.title = title
    this.description = description
    this.code = code
    this.thumbnail = thumbnail
    this.price = price
    this.stock = stock
  }

  static show = async (req, res) => {
    try {
      let productsArray = await Products.productsArray
      if (Number(req.query.pid)) {
        let productId = productsArray.find(
          (product) => product.id == req.query.pid,
        )
        res.send(productId)
      } else {
        res.send(productsArray)
      }
    } catch (err) {
      console.log(err)
      console.error(` { error: ${err} } `)
    }
  }

  static add = async (req, res) => {
    try {
      let productsArray = await Products.productsArray
      let product = new Products(
        req.body.title,
        req.body.description,
        req.body.code,
        req.body.thumbnail,
        req.body.price,
        req.body.stock,
      )
      productsArray.push(product)
      await Manager.write(Products.pathProducts, productsArray)
      res.send(product)
    } catch (err) {
      console.error(` { error: ${err} }`)
    }
  }

  static update = (req, res) => {
    try {
      let products = Products.productsArray
      let productId = products.find((product) => product.id == req.params.pid)
      productId.title = req.body.title
      productId.description = req.body.description
      productId.code = req.body.code
      productId.thumbnail = req.body.thumbnail
      productId.price = req.body.price
      productId.stock = req.body.stock
      Manager.save(Products.pathProducts, products)
      res.send(products)
    } catch (err) {
      console.log(` { error: ${err} } `)
    }
  }

  static delete = (req, res) => {
    try {
      let productsArray = Products.productsArray
      productsArray.splice(req.params.pid, 1)
      Manager.save(Products.pathProducts, productsArray)
      res.send(productsArray)
    } catch (err) {
      console.error(` { error: ${err} } `)
    }
  }
}
