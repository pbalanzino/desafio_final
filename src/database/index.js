import config from '../../config.js'
import FileContainer from '../../file.container.js'

let client
;(async () => {
  switch (config.database.engine) {
    case 'file':
      client = await import('./file.client.js')
      break
    case 'mongoDB':
      client = await import('./mongoDB.client.js')
      await client.connect()
      console.log('MongoDB connected')
      break
    case 'firebase':
      client = await import('./firebase.client.js')
      await client.connect(config.database.url)
      console.log('Firebase connected')
      break
    case 'sqlite3':
      client = await import('./sqlite3.client.js')
      console.log('SQLite3 connected')
      break
    default:
      client = await import('./mongoDB.client.js')
      console.log('MongoDB connected')
  }
})()
