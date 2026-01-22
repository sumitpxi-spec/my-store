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
    <aside className="bg-white rounded-xl p-4 shadow-sm w-64">
      <ul className="space-y-3 text-sm">
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
