"use client";

import Link from "next/link";

type Product = {
  slug: string;
  name: string;
  image?: string;
  activeIngredient?: string;
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition">
      {/* Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="h-44 flex items-center justify-center mb-4 cursor-pointer">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Name */}
      <h3 className="text-base font-semibold mb-2">{product.name}</h3>

      {/* Active ingredient */}
      <p className="text-sm text-gray-600 mb-3">
        Active ingredient:{" "}
        <span className="font-medium text-gray-800">
          {product.activeIngredient || "—"}
        </span>
      </p>

      {/* Price */}
      <div className="text-blue-600 font-bold text-lg mb-3">
        ${product.price.toFixed(2)}
        <span className="text-sm text-gray-500 font-normal"> / pill</span>
      </div>

      {/* Buy now */}
      <Link href={`/products/${product.slug}`}>
        <button className="w-full border border-gray-400 text-sm py-1.5 rounded hover:bg-gray-100 transition">
          Buy Now ❤️
        </button>
      </Link>
    </div>
  );
}
