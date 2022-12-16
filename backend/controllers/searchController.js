const Search = require("../models/Search");

/* ADD NEW PRODUCT */
const addSearchProduct = async (req, res) => {
  const payload = req.body;

  try {
    const newProduct = new Search(payload);
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
const getSearchProducts = async (req, res) => {
  const name = req.query.name;
  try {
    const products = await Search.find({ title: /name/ }).limit(5);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addSearchProduct, getSearchProducts };
