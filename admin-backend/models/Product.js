import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    slug: { type: String, required: true, unique: true },

    // Generic name / active ingredient
    genericName: { type: String, required: true },

    // Per-pill price (static)
    pricePerPill: { type: Number, required: true },

    // Optional legacy price (can remove later)
    price: { type: Number },

    description: { type: String },

    images: {
      type: [String],
      default: [],
    },

    category: { type: String },

    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
