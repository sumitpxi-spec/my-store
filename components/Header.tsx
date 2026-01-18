import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div
        style={{
          background: "#f5f7fb",
          borderBottom: "1px solid #e6eaf0",
          fontSize: 13,
          color: "#1f2937",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "6px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <span>🇺🇸 US: +1 (888) 243-74-06</span>
            <span>🇬🇧 GB: +44 (800) 041-87-44</span>
            <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
              📞 <span style={{ color: "#2563eb" }}>Request callback</span>
            </span>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span>ENGLISH ▾</span>
            <span>USD ▾</span>
            <span style={{ fontWeight: 500 }}>LOGIN</span>
            <span
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "4px 12px",
                borderRadius: 4,
                fontWeight: 500,
              }}
            >
              SIGNUP
            </span>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e6eaf0",
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
            <Image
              src="/logo.png"
              alt="HappyFamilyStore"
              width={190}
              height={48}
              priority
            />
          </div>

          {/* NAVIGATION */}
          <nav
            style={{
              display: "flex",
              gap: 26,
              fontSize: 15,
              fontWeight: 500,
              color: "#111827",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <span style={{ position: "relative" }}>
              🛒
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -8,
                  background: "#ef4444",
                  color: "#fff",
                  fontSize: 10,
                  padding: "2px 5px",
                  borderRadius: "50%",
                }}
              >
                0
              </span>
            </span>
            <span>
              Total <strong>$0.00</strong>
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
