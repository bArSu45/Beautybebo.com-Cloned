const mongoose = require("mongoose");

const navbarSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    actualprice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Navbar = mongoose.model("Navbar", navbarSchema);

module.exports = Navbar;
