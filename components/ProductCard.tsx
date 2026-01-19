export default function ProductCard({ product }: any) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 16,
        borderRadius: 8,
        border: "1px solid #e5e7eb",
      }}
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        style={{ width: "100%", height: 180, objectFit: "contain" }}
      />

      <h3 style={{ marginTop: 10 }}>{product.title}</h3>

      <p style={{ color: "#2563eb", fontWeight: "bold" }}>
        ${product.price}
      </p>

      <a
        href={`/product/${product.id}`}
        style={{
          display: "inline-block",
          marginTop: 10,
          padding: "8px 14px",
          background: "#2563eb",
          color: "#fff",
          borderRadius: 4,
          textDecoration: "none",
        }}
      >
        Buy Now
      </a>
    </div>
  );
}
