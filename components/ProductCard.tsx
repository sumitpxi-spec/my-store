"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-4 flex flex-col">
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

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
        {product.name}
      </h3>

      {/* Active ingredient */}
      <p className="text-sm text-gray-500 mb-2">
        Active ingredient:{" "}
        <span className="text-blue-600 font-medium">
          {product.activeIngredient}
        </span>
      </p>

      {/* Price */}
      <div className="text-xl font-bold text-blue-600 mb-4">
        ${product.price}
        <span className="text-sm text-gray-500 font-normal ml-1">pill</span>
      </div>

      {/* Actions */}
      <div className="mt-auto flex items-center gap-2">
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium transition">
          Add to cart
        </button>

        <button
          aria-label="Add to wishlist"
          className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
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

