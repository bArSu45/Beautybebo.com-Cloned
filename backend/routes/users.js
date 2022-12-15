const express = require("express");
const {
  userSignup,
  userLogin,
  getUserById,
  getUsers,
  deleteUser,
} = require("../controllers/userController");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

const userRoutes = express.Router();

/* SIGNUP */
userRoutes.post("/signup", userSignup);

/* LOGIN */
userRoutes.post("/login", userLogin);

/* GET ALL USER */
userRoutes.get("/", verifyTokenAndAdmin, getUsers);

/* GET USER */
userRoutes.get("/:id", verifyTokenAndAdmin, getUserById);

/* DELETE USER */
userRoutes.delete("/:id", verifyTokenAndAuthorization, deleteUser);

module.exports = userRoutes;

// firstName
// lastName
// email
// phone
// password
