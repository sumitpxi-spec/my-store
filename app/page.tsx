export const dynamic = "force-dynamic";

import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await fetch("/api/products", {
    cache: "no-store",
  }).then(res => res.json());

  return (
    <div style={{ display: "grid", gap: 20 }}>
      {products.map((p: any) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
