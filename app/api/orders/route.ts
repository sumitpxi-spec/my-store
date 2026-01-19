export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Order from "@/models/Order";
import { sendAdminEmail } from "@/lib/mail";

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();
  const order = await Order.create(data);

  await sendAdminEmail(order);

  return NextResponse.json({ success: true });
}
