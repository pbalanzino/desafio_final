import { MemoryContainer } from '../../memory.container.js'

export class MemoryDAO extends MemoryContainer {
  constructor() {
    super()
  }
  disconnect() {
    console.log('Finalizing operations...')
  }
}
