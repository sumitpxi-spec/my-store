import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userEmail: String,
  products: Array,
  shipping: Object,
  status: {
    type: String,
    default: "Pending",
  },
}, { timestamps: true });

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
