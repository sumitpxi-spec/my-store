import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  await dbConnect();

  const product = await Product.findOne({
    slug: params.slug,
    active: true,
  });

  if (!product) {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
