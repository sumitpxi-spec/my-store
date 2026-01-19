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
        console.log("PRODUCTS FROM API:", data);
        setProducts(data);
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

            {/* 🔴 DEBUG — REMOVE LATER */}
            <pre
              style={{
                background: "#eee",
                padding: 10,
                marginBottom: 20,
                maxHeight: 300,
                overflow: "auto",
                fontSize: 12,
              }}
            >
              {JSON.stringify(products, null, 2)}
            </pre>

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
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
