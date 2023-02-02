const express = require("express");
const {
  userSignup,
  userLogin,
  getUserById,
  getUsers,
  deleteUser,
  getUserCount,
  updateUserById
} = require("../controllers/userController");
const { VerifyAdmin, CartMiddleWare } = require("../middlewares/verifyToken");

const userRoutes = express.Router();

/* SIGNUP */
userRoutes.post("/signup", userSignup);

/* LOGIN */
userRoutes.post("/login", userLogin);




/* Get user Count*/
userRoutes.get("/count", VerifyAdmin, getUserCount);


/* GET ALL USER */
userRoutes.get("/", VerifyAdmin, getUsers);

/* GET USER */
userRoutes.get("/singleuser", CartMiddleWare, getUserById);

/* USER Data Update */
userRoutes.patch("/singleuser", CartMiddleWare, updateUserById);

/* DELETE USER */
userRoutes.delete("/:id", VerifyAdmin, deleteUser);

module.exports = userRoutes;

// firstName
// lastName
// email
// phone
// password
