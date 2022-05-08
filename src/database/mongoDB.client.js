import mongoose from 'mongoose'
import { config } from '../../config.js'

const engine = config

console.log(engine)
// export const mongoDBClient = mongoose.connect(engine.database.url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
