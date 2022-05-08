import { config } from './config.js'

console.log(config[1].database.engine)

config.map((config) => config.database.engine)
