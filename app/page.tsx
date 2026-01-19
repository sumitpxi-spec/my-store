"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const PER_PAGE = 8;

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

 useEffect(() => {
  fetch("https://admin-backend-npfj.onrender.com/api/products", {
    cache: "no-store",
  })
    .then(res => res.json())
    .then(data => {
      // only active products
      setProducts(data.filter((p: any) => p.active));
    })
    .catch(console.error);
}, []);

  const filtered = products.filter(p =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <>
      <Header />

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
          <Sidebar />

          <section style={{ flex: 1 }}>
            <h2>Products</h2>

            {paginated.length === 0 && <p>No products found.</p>}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20,
              }}
            >
              {paginated.map(p => (
                <ProductCard key={p.id || p._id} product={p} />
              ))}
            </div>

            {/* PAGINATION */}
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
                      padding: "6px 10px",
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

