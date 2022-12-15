const express = require("express");
const {
  addProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

const productRoute = express.Router();

/* CREATE */
productRoute.post("/", verifyTokenAndAdmin, addProduct);

/* GET ALL PRODUCTS */
productRoute.get("/", getProducts);

/* GET PRODUCT BY ID */
productRoute.get("/:id", getProductsById);

/* UPDATE PRODUCT */
productRoute.put("/:id", verifyTokenAndAdmin, updateProduct);

/* DELETE */
productRoute.delete("/:id", verifyTokenAndAdmin, deleteProduct);

module.exports = productRoute;
