import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await fetch("http://localhost:3000/api/products", {
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
