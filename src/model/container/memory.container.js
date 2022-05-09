class Memory {
  constructor() {
    this.data = []
  }

  create(element) {
    this.data[element.id] = element
  }

  read() {
    return this.data
  }

  update(id, element) {
    this.data[id] = element
  }

  delete(id) {
    delete this.data[id]
  }
}

export { Memory }
