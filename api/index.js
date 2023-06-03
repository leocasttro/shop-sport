const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userAuth = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Conexão DB sucesso'))
  .catch((err) => { console.log(err); });

app.use(express.json());
app.use(cors());

app.use('/api/auth', userAuth);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(3003, () => {
  console.log('Meu back-end rodando');
});
