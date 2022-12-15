const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

/* USER SIGNUP */
const userSignup = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: CryptoJS.AES.encrypt(
        password,
        process.env.PASS_SECRET
      ).toString(),
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: "Signup successful",
      signupUser: savedUser,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

/* USER LOGIN */
const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Credentials doesn't exist !");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Password doesn't match !");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "3d",
      }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({
      message: "Login successful",
      loginUser: {
        ...others,
        accessToken,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

/* GET ALL USERS */
const getUsers = async (req, res) => {
  try {
    const users = await User.find().limit(5);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* GET USER BY ID */
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* DELETE USERS */
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { userSignup, userLogin, getUsers, getUserById, deleteUser };
