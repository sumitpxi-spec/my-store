"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ display: "grid", gap: 20 }}>
      {products.map((p: any) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
