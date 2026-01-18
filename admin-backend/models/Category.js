import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: String,
  slug: String,
  active: { type: Boolean, default: true }
});

export default mongoose.model("Category", CategorySchema);
