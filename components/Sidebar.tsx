const categories = [
  "Bestsellers",
  "Anti Viral",
  "Anti-Acidity",
  "Antibiotics",
  "Anti-Allergic/Asthma",
  "Men's Health",
  "Pain Relief",
  "Weight Loss",
  "Women's Health",
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 220,
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        padding: 15,
        height: "fit-content",
      }}
    >
      {categories.map(cat => (
        <div
          key={cat}
          style={{
            padding: "8px 0",
            borderBottom: "1px solid #f1f1f1",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {cat}
        </div>
      ))}
    </aside>
  );
}
