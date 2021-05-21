const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const subcategorySchema = Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    slug: "title",
  },
});

module.exports = mongoose.model("Subcategory", subcategorySchema);
