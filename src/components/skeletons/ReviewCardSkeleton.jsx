const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-4 animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        </div>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gray-300 rounded"
            ></div>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      {/* Like Button */}
      <div className="h-4 bg-gray-300 rounded w-20"></div>
    </div>
  );
};

export default ReviewCardSkeleton;
