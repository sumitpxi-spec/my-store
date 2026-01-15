import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();
  return Response.json(await Product.find());
}
