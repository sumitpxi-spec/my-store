"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <>
      <Header />

      <main style={{ display: "flex", padding: 30 }}>
        <Sidebar />

        <section style={{ flex: 1, marginLeft: 30 }}>
          <h2>Products</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              marginTop: 20,
            }}
          >
            {products.map(p => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
