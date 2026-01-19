import { NextResponse } from "next/server";

const BACKEND_URL = "https://admin-backend-npfj.onrender.com";

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json([], { status: 200 });
    }

    const products = await res.json();
    return NextResponse.json(products);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json([], { status: 200 });
  }
}

