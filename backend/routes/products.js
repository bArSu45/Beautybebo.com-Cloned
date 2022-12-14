const express = require("express");
const {
  addProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRoute = express.Router();

/* CREATE */
productRoute.post("/", addProduct);

/* GET ALL PRODUCTS */
productRoute.get("/", getProducts);

/* GET PRODUCT BY ID */
productRoute.get("/:id", getProductsById);

/* UPDATE PRODUCT */
productRoute.put("/:id", updateProduct);

/* DELETE */
productRoute.delete("/:id", deleteProduct);

module.exports = productRoute;
