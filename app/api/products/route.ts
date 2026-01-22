import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(
      "https://admin-backend-npfj.onrender.com/api/products",
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch products" },
        { status: 500 }
      );
    }

    const rawProducts = await res.json();

    const products = rawProducts.map((p: any) => ({
      _id: p._id,
      name: p.title,
      slug: p.slug,
      activeIngredient: p.genericName,
      price: p.pricePerPill,
      image: p.images?.[0] || "",
    }));

    return NextResponse.json({
      products,
      pagination: {
        page: 1,
        totalPages: 1,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
