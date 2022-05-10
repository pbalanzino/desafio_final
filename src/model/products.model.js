import mongoose from 'mongoose'

const productsCollection = 'products'
const productsSchema = new mongoose.Schema({
  timestamp: { type: timestamp, required: true },
  title: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 1000 },
  price: { type: Number, required: true, max: 100000 },
  thumbnail: { type: String, required: true, max: 200 }
})

export const products = mongoose.model(productsCollection, productsSchema)
