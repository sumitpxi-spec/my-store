"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const PER_PAGE = 8;

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  /* ---------------- FETCH PRODUCTS ---------------- */
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products", {
          cache: "no-store",
        });

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  /* ---------------- SEARCH ---------------- */
  const filteredProducts = products.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredProducts.length / PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <>
      <Header />

      <main
        style={{
          background: "#f7f8fb",
          minHeight: "80vh",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "30px 20px",
            display: "flex",
            gap: 30,
          }}
        >
          {/* ---------------- SIDEBAR ---------------- */}
          <Sidebar />

          {/* ---------------- CONTENT ---------------- */}
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
              <h2 style={{ fontSize: 22, fontWeight: 600 }}>Products</h2>

              <div>
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search products"
                  style={{
                    padding: "8px 10px",
                    border: "1px solid #d1d5db",
                    borderRadius: 4,
                    width: 220,
                  }}
                />
              </div>
            </div>

            {/* ---------------- LOADING ---------------- */}
            {loading && <p>Loading products...</p>}

            {/* ---------------- EMPTY ---------------- */}
            {!loading && paginatedProducts.length === 0 && (
              <p>No products found.</p>
            )}

            {/* ---------------- PRODUCT GRID ---------------- */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20,
              }}
            >
              {paginatedProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* ---------------- PAGINATION ---------------- */}
            {totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 30,
                }}
              >
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    style={{
                      padding: "6px 12px",
                      border: "1px solid #d1d5db",
                      background: page === i + 1 ? "#2563eb" : "#fff",
                      color: page === i + 1 ? "#fff" : "#000",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
