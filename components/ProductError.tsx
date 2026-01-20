export default function ProductError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="text-center py-16">
      <h2 className="text-xl font-semibold mb-2">
        Unable to load products
      </h2>
      <p className="text-gray-500 mb-6">
        Please check your connection or try again.
      </p>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Retry
      </button>
    </div>
  );
}
