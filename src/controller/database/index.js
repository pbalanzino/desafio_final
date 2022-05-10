import config from '../../config.js'

export class Connection {
  static get(connection) {
    switch (connection) {
      case 'memory':
        console.log('Processing connection: 🧠')
        break
      case 'file':
        client = await import('./file.client.js')
        await client.connect(config.database.uri)
        console.log('Using file persistence 📝')
        break
      case 'mongoDB':
        client = await import('./mongoDB.client.js')
        await client.connect(config.database.uri)
        console.log('MongoDB connected 😎')
        break
      case 'firebase':
        client = await import('./firebase.client.js')
        await initializeApp(config.database.uri)
        console.log('Firebase connected 😎')
        break
      case 'sqlite3':
        client = await import('./sqlite3.client.js')
        await client.connect(config.database.uri)
        console.log('SQLite3 connected 😎')
        break
      default:
        client = await import('file')
        await client.connect(config.database.uri)
        console.log('Using file persistence 📝')
    }
  }
}

// let client
// ;(async () => {
//   switch (config.database.engine) {
//     case 'file':
//       client = await import('./file.client.js')
//       break
//     case 'mongoDB':
//       client = await import('./mongoDB.client.js')
//       await client.connect(config.database.uri)
//       console.log('MongoDB connected')
//       break
//     case 'firebase':
//       client = await import('./firebase.client.js')
//       await client.connect(config.database.uri)
//       await client.connect()
//       console.log('Firebase connected')
//       break
//     case 'sqlite3':
//       client = await import('./sqlite3.client.js')
//       await client.connect(config.database.uri)
//       console.log('SQLite3 connected')
//       break
//     default:
//       client = await import('./mongoDB.client.js')
//       await client.connect(config.database.uri)
//       console.log('MongoDB connected')
//   }
// })()

// export default client