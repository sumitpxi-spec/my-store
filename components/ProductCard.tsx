export default function ProductCard({ product }: any) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        style={{ width: "100%", height: 200, objectFit: "contain" }}
      />

      <h3 style={{ marginTop: 12 }}>{product.title}</h3>

      <p style={{ color: "#2563eb", fontWeight: "bold" }}>
        ${product.price}
      </p>

      <a href={`/product/${product._id}`}>
        <button
          style={{
            marginTop: 10,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "10px 14px",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </a>
    </div>
  );
}
