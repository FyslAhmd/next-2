import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data.details;
};

const FoodDetailsPage = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-screen flex justify-center items-center text-4xl font-semibold">
        No Food Found
      </div>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="h-80 md:h-full">
          <img
            src={foodImg}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600">
              {category}
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600">
              {area}
            </span>
          </div>

          <p className="text-2xl font-bold text-orange-500">৳ {price}</p>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition">
              Add to Cart
            </button>

            {video && (
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-xl font-medium transition text-center"
              >
                Watch Recipe
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
