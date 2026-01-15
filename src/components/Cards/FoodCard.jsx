import Link from "next/link";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

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
          <Link
          href={"/"}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-lg transition text-center"
          >
            Add to Cart
          </Link>

          <Link
            href={`/foods/${id}`}
            className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 text-sm font-medium rounded-lg transition py-2 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
