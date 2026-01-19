import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema(
  {
    label: { type: String },          // e.g. "30 pills"
    pills: { type: Number },          // 30
    mg: { type: String },             // "100mg"
    price: { type: Number },          // static price
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    /* ---------------- LISTING (PHASE 1) ---------------- */
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    genericName: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: [String], // ["Bestsellers", "ED"]
      default: [],
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    pricePerPill: {
      type: Number,
      required: true,
    },

    active: {
      type: Boolean,
      default: true,
    },

    /* ---------------- DETAILS (PHASE 2 – READY) ---------------- */
    description: {
      type: String,
    },

    packages: {
      type: [PackageSchema], // STATIC prices
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
