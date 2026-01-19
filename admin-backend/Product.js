import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    slug: { type: String, required: true, unique: true },

    genericName: { type: String, required: true },

    pricePerPill: { type: Number, required: true },

    images: { type: [String], default: [] },

    category: { type: String, required: true },

    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
