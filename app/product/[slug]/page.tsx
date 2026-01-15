import OrderModal from "@/components/OrderModal";

export default async function ProductPage({ params }: any) {
  const products = await fetch("http://localhost:3000/api/products").then(res =>
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
