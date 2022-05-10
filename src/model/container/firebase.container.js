import config from '../../config.js'

export class FirebaseContainer {
  constructor() {
    this.firebase = firebase
    this.db = firebase.firestore()
  }
  static async create(collection, data) {
    try {
      await this.db.collection(collection).add(data)
    } catch (error) {
      console.log(error)
    }
  }
  static async read(collection, id) {
    try {
      const doc = await this.db.collection(collection).doc(id).get()
      return doc.data()
    } catch (error) {
      console.log(error)
    }
  }
  static async update(collection, id, data) {
    try {
      await this.db.collection(collection).doc(id).update(data)
    } catch (error) {
      console.log(error)
    }
  }
  static async delete(collection, id) {
    try {
      await this.db.collection(collection).doc(id).delete()
    } catch (error) {
      console.log(error)
    }
  }
  static async list(collection) {
    try {
      const docs = await this.db.collection(collection).get()
      return docs.docs.map((doc) => doc.data())
    } catch (error) {
      console.log(error)
    }
  }
}
