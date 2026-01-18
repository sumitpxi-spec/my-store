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
    <aside style={{ width: 220 }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map(cat => (
          <li key={cat} style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
