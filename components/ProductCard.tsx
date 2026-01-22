"use client";

import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  // 🔍 DEBUG (REMOVE LATER)
  console.log("PRODUCT:", product);

  // ✅ PRICE RESOLUTION (handles ALL cases)
  const rawPrice =
    product.pricePerPill ??
    product.price ??
    product.price_per_pill ??
    product.pricePerUnit ??
    product?.prices?.perPill ??
    null;

  const price =
    typeof rawPrice === "number"
      ? rawPrice.toFixed(2)
      : rawPrice
      ? Number(rawPrice).toFixed(2)
      : null;

  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
      {/* IMAGE */}
      <Link href={`/products/${product.slug}`}>
        <div className="h-48 flex items-center justify-center p-4 border-b">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3>

        <p className="text-xs text-gray-500 mb-3">
          Active ingredient:{" "}
          <span className="text-blue-600 font-medium">
            {product.activeIngredient || "—"}
          </span>
        </p>

        {/* PRICE */}
        <div className="text-blue-600 font-bold text-lg mb-4">
          {price ? `$${price}` : "Price unavailable"}
          <span className="text-sm text-gray-500 font-normal ml-1">/ pill</span>
        </div>

        {/* CTA */}
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
