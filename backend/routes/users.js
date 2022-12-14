const express = require("express");
const { userSignup, userLogin } = require("../controllers/userController");

const userRoutes = express.Router();

/* SIGNUP */
userRoutes.post("/signup", userSignup);

/* LOGIN */
userRoutes.post("/login", userLogin);

module.exports = userRoutes;

// firstName
// lastName
// email
// phone
// password
