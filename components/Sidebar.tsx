const categories = [
  "Bestsellers",
  "Anti Viral",
  "Anti-Acidity",
  "Antibiotics",
  "Anti-Allergic/Asthma",
  "Anti-Depressant",
  "Anti-Diabetic",
  "Anti-Fungus",
  "Men's Health",
  "Pain Relief",
  "Weight Loss",
  "Women's Health",
];

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
