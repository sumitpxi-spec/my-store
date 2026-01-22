"use client";

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
    <aside className="w-64 bg-white border rounded-lg p-4">
      <ul className="space-y-2 text-sm">
        {categories.map((cat) => (
          <li
            key={cat}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
