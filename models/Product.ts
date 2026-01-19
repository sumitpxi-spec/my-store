import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    description: String,
    price: Number,
    images: [String],
    category: [String],
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
