const Navbar = require("../models/Navbar");

/* ADD to NAVBAR */
const addNavbarItem = async (req, res) => {
  const payload = req.body;

  try {
    const newNavbar = new Navbar(payload);
    const savedNavbarProduct = await newNavbar.save();
    res.status(200).json({
      message: "Product successfully added.",
      savedNavbarProduct,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

/* GET ALL THE PRODUCTS */
const getNavbarProducts = async (req, res) => {
  const query = req.query.q;
  const regex = new RegExp(query, "i");
  try {
    const navbars = await Navbar.find({
      $or: [{ title: regex }, { description: regex }],
    });
    res.status(200).json(navbars);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* GET PRODUCT BY ID */
const getNavProductsById = async (req, res) => {
  try {
    const navbar = await Navbar.findById(req.params.id);
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addNavbarItem, getNavbarProducts, getNavProductsById };
module.exports = { addNavbarItem, getNavbarProducts };
