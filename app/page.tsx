import ProductCard from "@/components/ProductCard";

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

