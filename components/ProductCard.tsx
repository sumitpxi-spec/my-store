"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="h-44 flex items-center justify-center p-5">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="px-5 pb-5 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-3 leading-snug">
          Active ingredient:{" "}
          <span className="text-blue-600 font-medium">
            {product.activeIngredient}
          </span>
        </p>

        <div className="mt-auto">
          {/* Price */}
          <div className="text-blue-600 font-bold text-lg mb-3">
            ${product.price}
            <span className="text-sm text-gray-500 ml-1">/ pill</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Buy Now
            </Link>

            <button
              aria-label="Add to wishlist"
              className="w-9 h-9 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
