const express = require("express");
const {
  addToCart,
  updateCart,
  deleteFromCart,
  getUserCart,
} = require("../controllers/cartController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

const cartRoutes = express.Router();

/* ADD TO CART */
cartRoutes.post("/", verifyToken, addToCart);

/* UPDATE */
cartRoutes.put("/:id", verifyTokenAndAuthorization, updateCart);

/* DELETE */
cartRoutes.delete("/:id", verifyTokenAndAuthorization, deleteFromCart);

/* GET USER CART BY USERID */
cartRoutes.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);

module.exports = cartRoutes;
