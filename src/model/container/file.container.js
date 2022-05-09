import manager from '../../tools/manager.js'
const { read, save } = manager
export class FileContainer {
  constructor(path) {
    this.path = path
  }

  static async create(element) {
    try {
      await save(this.path, JSON.stringify(element), null, '\t')
    } catch (error) {
      console.log(error)
    }
  }

  static async read() {
    try {
      let file = await read(this.path, 'utf-8')
      return JSON.parse(file)
    } catch (err) {
      console.log(`{ error: ${err} }`)
    }
  }

  static async update(id, element) {
    try {
      let file = await read(this.path, 'utf-8')
      let data = JSON.parse(file)
      data[id] = element
      await save(this.path, JSON.stringify(data))
    } catch (err) {
      console.log(`{ error: ${err} }`)
    }
  }

  static async delete(id) {
    try {
      await _delete(this.path)
      return JSON.parse(this.path)
    } catch (err) {
      console.log(`{ error: ${err} }`)
    }
  }
}
