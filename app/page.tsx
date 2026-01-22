"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        // ✅ HARD GUARD
        setProducts(Array.isArray(data.products) ? data.products : []);
      } catch (err) {
        console.error("Fetch failed", err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
          
          {/* LEFT: CATEGORY SIDEBAR */}
          <aside className="w-64 shrink-0">
            <Sidebar />
          </aside>

          {/* RIGHT: PRODUCTS */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold">Products</h1>

              <div className="flex gap-2">
                <input
                  placeholder="Search"
                  className="border rounded-md px-3 py-2 w-64"
                />
                <button className="bg-blue-600 text-white px-4 rounded-md">
                  Search
                </button>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
