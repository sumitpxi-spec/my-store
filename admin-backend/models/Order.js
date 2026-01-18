import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  items: Array,
  total: Number,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", OrderSchema);
