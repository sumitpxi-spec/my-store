import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  images: [String],
  category: String,
  active: { type: Boolean, default: true }
});

export default mongoose.model("Product", ProductSchema);
