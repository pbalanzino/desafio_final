import express from 'express';
import __dirname from './utils.js';
import cartsRouter from './routes/carts.router.js';
import productsRouter from './routes/products.router.js';

const app = express();
const admin = true;
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);