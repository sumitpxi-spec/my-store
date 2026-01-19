import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        style={{ width: "100%", height: 180, objectFit: "contain" }}
      />

      <h3 style={{ marginTop: 12 }}>{product.title}</h3>

      <p style={{ color: "#6b7280", fontSize: 14 }}>
        Active ingredient:{" "}
        <strong>{product.genericName}</strong>
      </p>

      <p
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#2563eb",
          marginTop: 6,
        }}
      >
        ${product.pricePerPill}{" "}
        <span style={{ fontSize: 14, color: "#6b7280" }}>pill</span>
      </p>

      <Link href={`/product/${product.slug}`}>
        <button
          style={{
            marginTop: 12,
            width: "100%",
            padding: "10px",
            background: "#2563eb",
            color: "#fff",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </Link>
    </div>
  );
}
