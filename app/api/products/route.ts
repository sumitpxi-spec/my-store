import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "@/models/Product";

/* ---------------- MONGODB CONNECTION ---------------- */
const MONGODB_URI = process.env.MONGO_URI!;

if (!mongoose.connection.readyState) {
  await mongoose.connect(MONGODB_URI);
}

/* ---------------- GET ALL PRODUCTS ---------------- */
export async function GET() {
  try {
    const products = await Product.find({ active: true })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(products);
  } catch (error) {
    console.error("PRODUCT FETCH ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
