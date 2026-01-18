export default function ProductCard({ product }: any) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        style={{
          width: "100%",
          height: 160,
          objectFit: "contain",
        }}
      />

      <div>
        <strong style={{ fontSize: 14 }}>{product.title}</strong>
        <p style={{ fontSize: 12, color: "#6b7280" }}>
          Active ingredient: {product.ingredient || "N/A"}
        </p>
      </div>

      <div style={{ color: "#2563eb", fontWeight: "bold" }}>
        ${product.price} <span style={{ fontSize: 12 }}>pill</span>
      </div>

      <button
        style={{
          padding: "8px",
          background: "#e5e7eb",
          border: "none",
          borderRadius: 4,
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
