"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="h-48 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          Active ingredient:{" "}
          <span className="font-medium text-gray-700">
            {product.activeIngredient}
          </span>
        </p>

        <div className="mt-auto">
          <div className="text-blue-600 font-bold text-xl mb-4">
            ${product.price}
            <span className="text-sm text-gray-500 ml-1">
              / pill
            </span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
