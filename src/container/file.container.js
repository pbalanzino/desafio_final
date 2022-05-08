import fs from 'fs'

export class FileContainer {
  constructor(path) {
    this.path = path
  }

  static async read() {
    try {
      let file = await fs.promises.readFile(this.path, 'utf-8')
      return JSON.parse(file)
    } catch (err) {
      console.log(`{ error: ${err} }`)
    }
  }

  static async save(element) {
    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(element),
        null,
        '\t'
      )
    } catch (err) {
      console.log(`{ error: ${err} }`)
    }
  }

  static async deleteAll() {
    try {
      await fs.promises.unlink(this.path)
    } catch (err) {
      console.log(`{ error: ${err} }`)
    }
  }
}
