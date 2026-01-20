"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const PER_PAGE = 12;

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
  fetch("https://admin-backend-npfj.onrender.com/api/products")
    .then(res => {
      console.log("STATUS:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("DATA FROM API:", data);
      setProducts(data);
    })
    .catch(err => {
      console.error("FETCH ERROR:", err);
    });
}, []);


  const totalPages = Math.ceil(products.length / PER_PAGE);
  const paginated = products.slice(
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
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

