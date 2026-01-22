"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";
import ProductError from "@/components/ProductError";
import Sidebar from "@/components/Sidebar";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      setProducts(Array.isArray(data.products) ? data.products : []);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return <ProductError onRetry={fetchProducts} />;
  }

  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block">
        <Sidebar />
      </aside>

      {/* Products */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Products</h1>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
