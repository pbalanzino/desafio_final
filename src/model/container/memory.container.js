let data = []

export class MemoryContainer {
  constructor(title, description, code, thumbnail, price, stock) {
    this.id = data.length
    this.timestamp = Date.now()
    this.title = title
    this.description = description
    this.code = code
    this.thumbnail = thumbnail
    this.price = price
    this.stock = stock
  }

  create(title, description, code, thumbnail, price, stock) {
    let newProduct = new MemoryContainer(
      title,
      description,
      code,
      thumbnail,
      price,
      stock
    )
    data.push({
      id: newProduct.id,
      timestamp: newProduct.timestamp,
      title: newProduct.title,
      description: newProduct.description,
      code: newProduct.code,
      thumbnail: newProduct.thumbnail,
      price: newProduct.price,
      stock: newProduct.stock
    })
    return newProduct
  }

  read(id) {
    if (id) {
      console.log(data[id])
      return data[id]
    }
    console.log(data)
    return data
  }

  update(id, title, description, code, thumbnail, price, stock) {
    data[id].title = title
    data[id].description = description
    data[id].code = code
    data[id].thumbnail = thumbnail
    data[id].price = price
    data[id].stock = stock
    console.log(`Product with id: ${id} has been updated.`)
    return data[id]
  }

  delete(id) {
    data.splice(id, 1)
    console.log(`Product with id: ${id} has been deleted.`)
    return data
  }
}
