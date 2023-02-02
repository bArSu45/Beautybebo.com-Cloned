const express = require("express");
const {
  addProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
  getProductCount,
  getProductStock,
} = require("../controllers/productController");
const { verifyTokenAndAdmin, VerifyAdmin } = require("../middlewares/verifyToken");

const productRoute = express.Router();

/* CREATE */

productRoute.post("/", VerifyAdmin, addProduct);

/* GET ALL PRODUCTS */
productRoute.get("/", getProducts);


productRoute.get("/count", VerifyAdmin, getProductCount);

productRoute.get("/stockcount", VerifyAdmin, getProductStock);

/* GET PRODUCT BY ID */
productRoute.get("/:id", getProductsById);

/* UPDATE PRODUCT */
productRoute.put("/:id", verifyTokenAndAdmin, updateProduct);

/* DELETE */
productRoute.delete("/:id", verifyTokenAndAdmin, deleteProduct);

module.exports = productRoute;
