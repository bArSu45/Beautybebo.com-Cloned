const Product = require("../models/Product");

/* ADD NEW PRODUCT */
const addProduct = async (req, res) => {
  const payload = req.body;

  try {
    const newProduct = new Product(payload);
    const savedProduct = await newProduct.save();
    res.status(200).json({
      message: "Product successfully added.",
      savedProduct,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

/* GET ALL THE PRODUCTS */
const getProducts = async (req, res) => {
  const category = req.query.category;
  const regex = new RegExp(category, "i");
  try {
    const products = await Product.find({ category: regex });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* GET PRODUCT BY ID */
const getProductsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* UPDATE PRODUCT */
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: id },
      payload
    );

    res.status(200).json({
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

/* DELETE PRODUCT */
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Product has been deleted successfully.",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
};
