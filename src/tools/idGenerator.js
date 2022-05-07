import { Manager } from './manager.js'

export function* idGenerator() {
  let count = 0
  while (true) {
    yield count++
  }
}
