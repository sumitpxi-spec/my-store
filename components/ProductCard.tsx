import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        padding: 16,
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      }}
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        style={{
          width: "100%",
          height: 180,
          objectFit: "contain",
          marginBottom: 12,
        }}
      />

      <h3 style={{ fontSize: 18, fontWeight: 600 }}>
        {product.title}
      </h3>

      <p style={{ fontSize: 14, color: "#6b7280" }}>
        Active ingredient:{" "}
        <strong>{product.genericName}</strong>
      </p>

      <p
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#2563eb",
          marginTop: 6,
        }}
      >
        ${product.pricePerPill}{" "}
        <span style={{ fontSize: 14, fontWeight: 400 }}>
          pill
        </span>
      </p>

      <Link href={`/products/${product.slug}`}>
        <button
          style={{
            marginTop: 12,
            width: "100%",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 0",
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </Link>
    </div>
  );
}
