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

        // ✅ STRICT GUARD
        setProducts(Array.isArray(data.products) ? data.products : []);
      } catch (err) {
        console.error("Failed to fetch products", err);
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
          
          {/* LEFT SIDEBAR */}
          <aside className="w-64 shrink-0">
            <Sidebar />
          </aside>
          
          {/* PRODUCTS */}
          <section className="flex-1">
            <h1 className="text-2xl font-semibold mb-6">Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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


