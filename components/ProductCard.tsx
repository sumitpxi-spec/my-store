"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white border rounded-lg p-4 hover:shadow-md transition flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="h-40 flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Name */}
      <h3 className="font-medium text-sm mb-1">{product.name}</h3>

      {/* Active ingredient */}
      <p className="text-xs text-gray-500 mb-2">
        Active ingredient:{" "}
        <span className="text-blue-600 font-medium">
          {product.activeIngredient}
        </span>
      </p>

      {/* Price */}
      <div className="text-blue-600 font-bold text-lg mb-3">
        ${product.price}
        <span className="text-sm text-gray-500 ml-1">pill</span>
      </div>

      {/* Buy Now */}
      <Link href={`/products/${product.slug}`}>
        <button className="mt-auto w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded transition">
          Buy Now
        </button>
      </Link>
    </div>
  );
}

