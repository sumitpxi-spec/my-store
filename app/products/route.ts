import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/products`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Backend error");
    }

    const rawProducts = await res.json();

    // Normalize backend response
    const products = rawProducts.map((p: any) => ({
      _id: p._id,
      name: p.title, // 🔑 title → name
      slug: p.slug,
      activeIngredient: p.genericName, // 🔑 genericName → activeIngredient
      price: p.pricePerPill, // 🔑 pricePerPill → price
      image: p.images?.[0] || "", // 🔑 images[] → image
    }));

    return NextResponse.json({
      products,
      pagination: {
        page: 1,
        totalPages: 1,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
