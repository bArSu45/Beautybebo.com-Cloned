const express = require("express");
const {
  addNavbarItem,
  getNavbarProducts,
  getNavProductsById,
} = require("../controllers/navController");

const navbarRoutes = express.Router();

/* ADD */
navbarRoutes.post("/", addNavbarItem);

/* GET ALL */
navbarRoutes.get("/", getNavbarProducts);

/* GET PRODUCT BY ID */
navbarRoutes.get("/:id", getNavProductsById);

module.exports = navbarRoutes;
