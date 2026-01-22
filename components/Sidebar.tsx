"use client";

export default function Sidebar() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <ul className="space-y-3 text-sm">
        <li>Bestsellers</li>
        <li>Anti Viral</li>
        <li>Anti-Acidity</li>
        <li>Antibiotics</li>
        <li>Anti-Allergic/Asthma</li>
        <li>Anti-Depressant</li>
        <li>Anti-Diabetic</li>
        <li>Anti-Fungus</li>
        <li>Men&apos;s Health</li>
        <li>Pain Relief</li>
        <li>Weight Loss</li>
        <li>Women&apos;s Health</li>
      </ul>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        background: "#ffffff",
        border: "1px solid #e6eaf0",
        borderRadius: 6,
        padding: "14px 16px",
      }}
    >
      {categories.map(cat => (
        <div
          key={cat}
          style={{
            padding: "9px 0",
            fontSize: 14,
            borderBottom: "1px solid #f1f3f6",
            cursor: "pointer",
          }}
        >
          {cat}
        </div>
      ))}
    </aside>
  );
}
