export default function ProductSkeleton() {
  return (
    <div className="rounded-xl bg-white shadow p-4 animate-pulse">
      <div className="h-40 bg-gray-200 rounded mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
      <div className="h-10 bg-gray-200 rounded" />
    </div>
  );
}
