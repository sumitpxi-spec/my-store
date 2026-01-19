import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://admin-backend-npfj.onrender.com/api/products",
      { cache: "no-store" }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json([], { status: 500 });
  }
}
