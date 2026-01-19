// admin-backend/models/Product.js
import mongoose from "mongoose";

/**
 * Package schema
 * Example:
 * 200mg x 10 pills – $36.77
 */
const PackageSchema = new mongoose.Schema(
  {
    dosage: {
      type: String, // "200mg"
      required: true,
    },
    pills: {
      type: Number, // 10, 20, 40
      required: true,
    },
    price: {
      type: Number, // total price
      required: true,
    },
    perPill: {
      type: Number, // price per pill
      required: true,
    },
    bonus: {
      type: String, // "+4 pills"
      default: "",
    },
  },
  { _id: false }
);

/**
 * Product schema
 */
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Viagra
    },

    slug: {
      type: String,
      required: true,
      unique: true, // viagra
      lowercase: true,
    },

    category: {
      type: String, // Erectile Dysfunction
      required: true,
    },

    activeIngredient: {
      type: String, // Sildenafil
      required: true,
    },

    image: {
      type: String, // image URL
      required: true,
    },

    shortDescription: {
      type: String,
    },

    description: {
      type: String,
    },

    inStock: {
      type: Boolean,
      default: true,
    },

    packages: {
      type: [PackageSchema], // 👈 VERY IMPORTANT
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
