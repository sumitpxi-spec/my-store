import { connectDB } from "@/lib/db";
import Order from "@/models/Order";
import { sendAdminEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const data = await req.json();
  await connectDB();
  const order = await Order.create(data);
  await sendAdminEmail(order);
  return Response.json({ success: true });
}
