"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <img
        src={product.images?.[0] || "/placeholder.png"}
        alt={product.title}
        style={{
          width: "100%",
          height: 180,
          objectFit: "contain",
        }}
      />

      <h3 style={{ fontSize: 16, fontWeight: 600 }}>
        {product.title}
      </h3>

      {product.genericName && (
        <p style={{ fontSize: 13, color: "#6b7280" }}>
          Active ingredient:{" "}
          <strong>{product.genericName}</strong>
        </p>
      )}

      {product.pricePerPill && (
        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#2563eb",
          }}
        >
          ${product.pricePerPill} <span style={{ fontSize: 12 }}>pill</span>
        </p>
      )}

      <Link href={`/products/${product.slug}`}>
        <button
          style={{
            marginTop: "auto",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "10px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </Link>
    </div>
  );
}


