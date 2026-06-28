// Simple pulsing skeleton for loading state
function SkeletonBox({ className }) {
  return (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      {/* Card skeletons */}
      <div className="flex gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex-1 space-y-3">
          <SkeletonBox className="h-5 w-40" />
          <SkeletonBox className="h-4 w-full" />
          <SkeletonBox className="h-4 w-full" />
          <SkeletonBox className="h-10 w-full" />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex-1 space-y-3">
          <SkeletonBox className="h-5 w-40" />
          <SkeletonBox className="h-4 w-full" />
          <SkeletonBox className="h-4 w-full" />
          <SkeletonBox className="h-10 w-full" />
        </div>
      </div>

      {/* Table skeleton */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <SkeletonBox className="h-5 w-32" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <SkeletonBox className="w-4 h-4" />
            <SkeletonBox className="w-7 h-7 rounded-full" />
            <SkeletonBox className="h-4 flex-1" />
            <SkeletonBox className="h-4 w-20" />
            <SkeletonBox className="h-4 w-20" />
            <SkeletonBox className="h-4 w-20" />
            <SkeletonBox className="h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSkeleton;
