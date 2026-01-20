import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="h-48 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pb-6">
        
        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
          {product.name}
        </h3>

        {/* Ingredient */}
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
          Active ingredient:{" "}
          <span className="font-medium text-gray-700">
            {product.activeIngredient}
          </span>
        </p>

        {/* Spacer pushes price + button to bottom */}
        <div className="mt-auto">
          
          {/* Price */}
          <div className="text-blue-600 font-bold text-xl mb-4">
            ${
