"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  const price =
    product?.pricePerPill ??
    product?.price ??
    null;

  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition flex flex-col">
      
      {/* PRODUCT IMAGE */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="h-48 flex items-center justify-center p-4 bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </Link>

      {/* PRODUCT CONTENT */}
      <div className="px-4 pb-4 flex flex-col flex-1">
        
        {/* TITLE */}
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          {product.name}
        </h3>

        {/* ACTIVE INGREDIENT */}
        <p className="text-sm text-gray-500 mb-3">
          Active ingredient:{" "}
          <span className="text-blue-600 font-medium">
            {product.activeIngredient}
          </span>
        </p>

        {/* PRICE */}
        <div className="mb-4">
          <span className="text-blue-600 text-xl font-bold">
            {price !== null ? `$${price}` : "—"}
          </span>
          <span className="text-sm text-gray-500 ml-1">
            pill
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-auto flex items-center gap-2">
          
          {/* ADD TO CART */}
          <button
            className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition"
          >
            Add to cart
          </button>

          {/* FAVORITE */}
          <button
            aria-label="Add to favorites"
            className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-gray-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
