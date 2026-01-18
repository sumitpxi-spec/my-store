export default function Footer() {
  return (
    <footer style={{ marginTop: 40, borderTop: "1px solid #eee", padding: 30 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>HappyFamilyStore</strong>
          <p>© 2001–2026 Canadian Pharmacy Ltd.</p>
        </div>
        <div>
          <p>Free Shipping</p>
          <p>Money Back Guarantee</p>
          <p>24/7 Support</p>
        </div>
      </div>
    </footer>
  );
}
