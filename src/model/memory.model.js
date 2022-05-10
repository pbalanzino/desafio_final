import { MemoryContainer } from './src/model/container/memory.container.js'
import { MemoryDAO } from './container/dao/memory.productDAO.js'

let memoryContainer = new MemoryContainer()

let { create, read, update } = memoryContainer

create('title1', '1', 'code111', 'thumbnail', 111, 1000)
create('title2', '2', 'code222', 'thumbnail', 222, 1000)
create('title3', '3', 'code222', 'thumbnail', 222, 1000)
create('title4', '2', 'code222', 'thumbnail', 222, 1000)
create('title5', '2', 'code222', 'thumbnail', 222, 1000)
read()
console.log('***************')
read(3)
console.log('***************')
read()
console.log('***************')
update(3, 'title10', '10', 'code333', 'thumbnail', 333, 1000)
read(3)
console.log('***************')
memoryContainer.delete(3)
read()
