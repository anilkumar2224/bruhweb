const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  description_use_first: {
    type: String,
    required: true,
  },
  description_use_second: {
    type: String,
    required: true,
  },
  description_use_third: {
    type: String,
    required: true,
  },
  specific_type: {
    type: String,
    required: true,
  },
  specific_ingredients: {
    type: String,
    required: true,
  },
  specific_date: {
     type: Date,
    default: Date.now,
  },
  specific_expiry_date: {
     type: Date,
    default: Date.now,
  },
  specific_quantity: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  manufacturer: {
    type: String,
  },
  available: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
