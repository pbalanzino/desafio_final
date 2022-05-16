import express from 'express'
import __dirname from './utils.js'
import cartsRouter from './routes/carts.router.js'
import productsRouter from './routes/products.router.js'
import userRouter from './routes/user.router.js'
import 'dotenv/config'
import { MongoClient } from './controller/database/mongoDB.client.js'
const app = express()
const PORT = process.env.PORT || 8080

app
  .set('json spaces', 2)
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/api/products', productsRouter)
  .use('/api/carts', cartsRouter)
  .use('/api/admin', userRouter)
  .use((error, req, res, next) => {
    console.log(error)
    res.status(error.status).send({
      error: error.message
    })
  })
const connection = new MongoClient()
connection.connect()
const server = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/api/products/`)
})
