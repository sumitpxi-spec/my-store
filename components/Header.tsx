export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #eee", padding: "15px 30px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "#2f5bea" }}>HappyFamilyStore</h2>
        <nav style={{ display: "flex", gap: 20 }}>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <strong>$0.00</strong>
        </nav>
      </div>
    </header>
  );
}
