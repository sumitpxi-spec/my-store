import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  await dbConnect();

  const products = await Product.find(
    { active: true },
    {
      title: 1,
      slug: 1,
      genericName: 1,
      image: 1,
      category: 1,
      isBestSeller: 1,
      pricePerPill: 1,
    }
  ).sort({ createdAt: -1 });

  return NextResponse.json(products);
}
