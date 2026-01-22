"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col hover:shadow-md transition">

      {/* IMAGE */}
      <Link href={`/products/${product.slug}`}>
        <div className="h-40 flex items-center justify-center mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-sm font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500">
          Active ingredient:{" "}
          <span className="text-blue-600 font-medium">
            {product.activeIngredient}
          </span>
        </p>

        {/* PRICE */}
        <div className="mt-1">
          <span className="text-blue-600 text-lg font-bold">
            ${product.pricePerPill}
          </span>
          <span className="text-xs text-gray-500 ml-1">pill</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-3 flex gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 text-center bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition"
        >
          Buy Now
        </Link>

        <button className="w-10 border rounded-md flex items-center justify-center hover:border-blue-500 transition">
          ♡
        </button>
      </div>
    </div>
  );
}
