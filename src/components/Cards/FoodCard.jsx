const FoodCard = ({ food }) => {
  const { title, foodImg, price, category } = food;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-500">{category}</p>

        <p className="text-lg font-bold text-orange-500">৳ {price}</p>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            // onClick={onAddToCart}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-lg transition"
          >
            Add to Cart
          </button>

          <button
            // onClick={onViewDetails}
            className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 text-sm font-medium py-2 rounded-lg transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
