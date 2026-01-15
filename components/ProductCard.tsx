export default function ProductCard({ product }: any) {
  return (
    <a href={`/product/${product.slug}`} className="bg-white p-3 rounded shadow">
      <img src={product.images[0]} />
      <h3 className="font-medium">{product.title}</h3>
      <p className="text-red-600 font-bold">${product.price}</p>
    </a>
  );
}
