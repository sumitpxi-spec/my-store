export default function Header() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: 20, color: "#2563eb" }}>
          HappyFamilyStore
        </strong>

        <nav style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <a>Home</a>
          <a>Products</a>
          <a>About</a>
          <a>Contact</a>
          <strong>$0.00</strong>
        </nav>
      </div>
    </header>
  );
}
