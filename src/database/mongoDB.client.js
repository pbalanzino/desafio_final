import mongoose from 'mongoose'
import config from '../../config.js'

export const mongoDBClient = mongoose.connect(config.database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
