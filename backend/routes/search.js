const express = require("express");

const searchRoute = express.Router();

/* Add product */
searchRoute.post("/", addProduct);

/* GET ALL PRODUCTS */
searchRoute.get("/", getProducts);

module.exports = searchRoute;
