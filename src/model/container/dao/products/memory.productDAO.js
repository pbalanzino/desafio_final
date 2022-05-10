import { MemoryContainer } from '../../memory.container.js'

export class MemoryDAO extends MemoryContainer {
  constructor() {
    super('model/memory.model.js')
  }
  async disconnect() {
    console.log('Finalizing operations...')
  }
}
