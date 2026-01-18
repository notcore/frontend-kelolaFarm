const SkeletonCard = () => (
  <div className="animate-pulse rounded-xl border bg-white p-3">
    <div className="h-32 w-full rounded-lg bg-gray-200" />
    <div className="mt-3 space-y-2">
      <div className="h-4 w-3/4 rounded bg-gray-200" />
      <div className="h-3 w-1/2 rounded bg-gray-200" />
      <div className="h-3 w-1/3 rounded bg-gray-200" />
    </div>
  </div>
);

export default SkeletonCard;
