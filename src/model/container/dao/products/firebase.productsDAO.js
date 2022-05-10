import { FirebaseContainer } from '../../firebase.container.js'

export class FirebaseDAO extends FirebaseContainer {
  constructor() {
    super()
  }
  async disconnect() {
    await this.close()
  }
}
