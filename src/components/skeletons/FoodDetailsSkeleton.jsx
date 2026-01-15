const FoodDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 animate-pulse">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6">
        {/* Image Skeleton */}
        <div className="h-80 md:h-full bg-gray-300"></div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>

          <div className="flex gap-3">
            <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
          </div>

          <div className="h-8 bg-gray-300 rounded w-1/4"></div>

          <div className="flex gap-3 pt-4">
            <div className="h-12 bg-gray-300 rounded-xl flex-1"></div>
            <div className="h-12 bg-gray-300 rounded-xl flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
