"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  // ✅ STRICT PRICE RESOLUTION
  const price =
    product?.pricePerPill ??
    product?.price ??
    null;

  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition flex flex-col">
      
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
          <span className="text-blue-600">
            {product.activeIngredient}
          </span>
        </p>

        {/* PRICE */}
        <div className="text-blue-600 font-bold text-lg mb-4">
          {price !== null ? `$${price}` : "—"}
          <span className="text-sm text-gray-500 font-normal ml-1">
            / pill
          </span>
        </div>

        {/* BUY NOW */}
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
