const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    expire: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;
