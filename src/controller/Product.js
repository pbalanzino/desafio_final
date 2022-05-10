class Product {
  constructor(title, description, code, thumbnail, price, stock) {
    this.id = id++
    this.timestamp = Date.now()
    this.title = title
    this.description = description
    this.code = code
    this.thumbnail = thumbnail
    this.price = price
    this.stock = stock
  }
}

export { Product }
