"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  // ✅ HARD PRICE FIX (NO MORE `$ pill`)
  const price =
    product?.pricePerPill !== undefined &&
    product?.pricePerPill !== null &&
    product?.pricePerPill !== ""
      ? Number(product.pricePerPill).toFixed(2)
      : null;

  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col transition hover:shadow-md">

      {/* IMAGE */}
      <Link href={`/products/${product.slug}`}>
        <div className="h-36 flex items-center justify-center mb-2">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* DETAILS */}
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-sm font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500 leading-tight">
          Active ingredient:{" "}
          <span className="text-blue-600 font-medium">
            {product.activeIngredient}
          </span>
        </p>

        {/* PRICE */}
        {price && (
          <div className="mt-1">
            <span className="text-blue-600 text-lg font-bold">
              ${price}
            </span>
            <span className="text-xs text-gray-500 ml-1">pill</span>
          </div>
        )}
      </div>

      {/* ACTIONS */}
      <div className="mt-3 flex gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="
            flex-1 text-center
            bg-blue-600 text-white text-sm py-2 rounded-md
            hover:bg-blue-700 active:bg-blue-800
            transition-colors
          "
        >
          Buy Now
        </Link>

        <button
          type="button"
          className="
            w-10 h-10 border rounded-md
            flex items-center justify-center
            text-gray-500
            hover:border-blue-500 hover:text-blue-600
            transition
          "
        >
          ♡
        </button>
      </div>
    </div>
  );
}
