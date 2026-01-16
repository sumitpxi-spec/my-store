"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import OrderModal from "@/components/OrderModal";

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(products => {
        const p = products.find((x: any) => x.slug === slug);
        setProduct(p);
      });
  }, [slug]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <img src={product.images[0]} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <OrderModal product={product} />
    </>
  );
}
