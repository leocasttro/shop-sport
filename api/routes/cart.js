const router = require('express').Router();
const Cart = require('../models/Cart');
const { verifyTokenAndAdmin, verifyTokenAuth, verifyToken } = require('./verifyToken');

router.post('/', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', verifyTokenAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', verifyTokenAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Carrinho deletado');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/find/:userId', verifyTokenAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
