const Cart = require("../models/Cart");

/* ADD TO CART */
const addToCart = async (req, res) => {
  const payload = req.body;
  const newCart = new Cart(payload);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* UPDATE CART */
const updateCart = async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    const updatedCart = await Cart.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* DELETE from CART */
const deleteFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

/* GET USER CART BY USERID */
const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addToCart, updateCart, deleteFromCart, getUserCart };
