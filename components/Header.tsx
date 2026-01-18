import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* TOP INFO BAR */}
      <div
        style={{
          background: "#f3f6fb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "6px 20px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
          }}
        >
          <div style={{ display: "flex", gap: 20 }}>
            <span>🇺🇸 US: +1 (888) 243-74-06</span>
            <span>🇬🇧 GB: +44 (800) 041-87-44</span>
          </div>

          <div style={{ display: "flex", gap: 15 }}>
            <span style={{ cursor: "pointer" }}>Request callback</span>
            <span>ENGLISH</span>
            <span>USD</span>
            <span style={{ fontWeight: 500 }}>LOGIN</span>
            <span
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: 4,
                fontWeight: 500,
              }}
            >
              SIGNUP
            </span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
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
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center" }}>
      <img
  src="/logo.png"
  alt="HappyFamilyStore"
  style={{ height: 42, display: "block" }}
/>
          </div>

          {/* NAV */}
          <nav
            style={{
              display: "flex",
              gap: 22,
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            <a>Home</a>
            <a>Products</a>
            <a>About us</a>
            <a>Articles</a>
            <a>Video</a>
            <a>Testimonials</a>
            <a>Contact</a>
          </nav>

          {/* CART */}
          <div style={{ fontSize: 14, fontWeight: 500 }}>
            🛒 <strong>Total</strong> $0.00
          </div>
        </div>
      </header>
    </>
  );
}
