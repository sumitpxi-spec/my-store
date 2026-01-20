import OrderModal from "@/components/OrderModal";

/* ---------------- FETCH SINGLE PRODUCT ---------------- */
async function getProduct(slug: string) {
  const res = await fetch(`/api/products/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

/* ---------------- PAGE ---------------- */
export default async function ProductPage({ params }: any) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* IMAGE */}
      <div className="flex justify-center mb-6">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-80 rounded shadow"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      {/* DESCRIPTION */}
      <div
        className="prose mb-4"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />

      {/* PRICE */}
      <p className="text-2xl text-blue-600 font-semibold mb-6">
        ${product.price}
      </p>

      {/* ORDER / CART */}
      <OrderModal product={product} />
    </div>
  );
}

