import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";
    const limit = "12";

    const backendRes = await fetch(
      `${process.env.BACKEND_URL}/products?page=${page}&limit=${limit}`,
      { cache: "no-store" }
    );

    if (!backendRes.ok) {
      throw new Error("Backend error");
    }

    const backendData = await backendRes.json();

    /**
     * CASE 1: backend already paginated
     */
    if (backendData.products && backendData.pagination) {
      return NextResponse.json(backendData);
    }

    /**
     * CASE 2: backend returns raw array (old behavior)
     */
    if (Array.isArray(backendData)) {
      return NextResponse.json({
        products: backendData.map((p: any) => ({
          _id: p._id,
          name: p.name || p.title,
          slug: p.slug || p._id,
          image: p.image || p.images?.[0]?.url || "",
          activeIngredient:
            p.activeIngredient || p.active_ingredient || "",
          price:
            p.price || p.pricePerPill || p.price_per_pill || "",
        })),
        pagination: {
          page: Number(page),
          totalPages: 1,
        },
      });
    }

    /**
     * Fallback
     */
    return NextResponse.json({
      products: [],
      pagination: { page: 1, totalPages: 1 },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

