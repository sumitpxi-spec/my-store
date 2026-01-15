import OrderModal from "@/components/OrderModal";

export default async function ProductPage({ params }: any) {
  const products = await fetch("/api/products").then(res => res.json());
    res.json()
  );

  const product = products.find((p: any) => p.slug === params.slug);

  return (
    <>
      <img src={product.images[0]} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <OrderModal product={product} />
    </>
  );
}

