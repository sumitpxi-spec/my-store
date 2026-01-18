export default function ProductCard({ product }: any) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e6eaf0",
        borderRadius: 6,
        padding: 14,
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
          height: 150,
          objectFit: "contain",
        }}
      />

      <div style={{ fontSize: 14, fontWeight: 500 }}>
        {product.title}
      </div>

      <div style={{ fontSize: 12, color: "#6b7280" }}>
        Active ingredient: {product.ingredient || "N/A"}
      </div>

      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#2563eb",
        }}
      >
        ${product.price} <span style={{ fontSize: 12 }}>pill</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: "auto",
        }}
      >
        <button
          style={{
            flex: 1,
            padding: "8px",
            border: "1px solid #d1d5db",
            background: "#f3f4f6",
            borderRadius: 4,
            fontSize: 13,
          }}
        >
          Add to cart
        </button>

        <button
          style={{
            width: 36,
            border: "1px solid #d1d5db",
            background: "#fff",
            borderRadius: 4,
          }}
        >
          ♡
        </button>
      </div>
    </div>
  );
}
