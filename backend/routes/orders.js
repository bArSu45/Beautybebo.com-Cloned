const express = require("express");
const {
  createOrder,
  getOrdersByUser,
  getOrdersAdmin,
  deleteOrder,
} = require("../controllers/orderController");
const {
  CartMiddleWare,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const orderRoute = express.Router();

/* CREATE */
orderRoute.post("/", CartMiddleWare, createOrder);

/* GET USER ORDERS */
orderRoute.get("/find", CartMiddleWare, getOrdersByUser);

/* GET ALL ORDERS */
orderRoute.get("/", verifyTokenAndAdmin, getOrdersAdmin);

/* DELETE */
orderRoute.delete("/:id", verifyTokenAndAdmin, deleteOrder);

module.exports = orderRoute;
