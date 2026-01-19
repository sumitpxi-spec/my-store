import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      index: true,
    },

    genericName: {
      type: String,
    },

    pricePerPill: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
    },

    images: {
      type: [String],
      default: [],
    },

    category: {
      type: String,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
