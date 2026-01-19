import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://admin-backend-npfj.onrender.com/api/products",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products from backend");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
