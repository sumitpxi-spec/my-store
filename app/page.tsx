"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN LAYOUT */}
      <main style={{ background: "#f7f8fb", minHeight: "80vh" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "30px 20px",
            display: "flex",
            gap: 30,
          }}
        >
          {/* SIDEBAR */}
          <Sidebar />

          {/* CONTENT */}
          <section style={{ flex: 1 }}>
            {/* TITLE + SEARCH */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <h2 style={{ margin: 0 }}>Products</h2>

              <div>
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search"
                  style={{
                    padding: "8px 10px",
                    border: "1px solid #d1d5db",
                    borderRadius: 4,
                    fontSize: 14,
                  }}
                />
                <button
                  style={{
                    marginLeft: 8,
                    padding: "8px 14px",
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    fontSize: 14,
                  }}
                >
                  Search
                </button>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20,
              }}
            >
              {filteredProducts.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* PAGINATION PLACEHOLDER */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                marginTop: 30,
              }}
            >
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
